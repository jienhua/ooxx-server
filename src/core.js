import {List, Map, fromJS} from 'immutable'

const checkWin = function(moves, turns, startPlayer){
	const temp = moves.toJS()
	const curPlayer = whoTurn(turns)
	for(let i = 0; i < 3; i++){
		if(temp[i][0] === curPlayer &&
		   temp[i][1] === curPlayer &&
		   temp[i][2] === curPlayer){
			return curPlayer
		}
	}
	for(let j = 0; j < 3; j++){
		if(temp[0][j] === curPlayer &&
		   temp[1][j] === curPlayer &&
		   temp[2][j] === curPlayer){
			return curPlayer
		}
	}

	// check \
	if(temp[0][0] === temp[1][1] &&
	   temp[0][0] === temp[2][2] &&
	   temp[0][0] === curPlayer){
		return curPlayer
	}

	// check /
	if(temp[0][2] === temp[1][1] &&
	   temp[0][2] === temp[2][0] &&
	   temp[1][1] === curPlayer){
		return curPlayer
	}

	return -1

}

const whoTurn = function(turns, startPlayer){

	if(startPlayer == 0){
		return turns%2
	}
	return (turns+1)%2
	
}

export const INITIAL_STATE = fromJS({
	board: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
	turns: 0
})

// export const INITIAL_STATE = Map()

export function addMove(state, move){
	// return state.update('moves', moves => moves.push(move))
	
	const board = state.get('board').updateIn(
			[move/3, move%3],
			value => whoTurn(state.get('turns'), state.get('startPlayer'))
		)

	
	const turns = state.get('turns')
	const result = checkWin(board, state.get('turns'), state.get('startPlayer'))
	if( result !== -1){
		console.log(state.get('board').toJS())
		return state.remove('turns')
					.remove('startPlayer')
					.set('winner', result)
					.merge({board: board})
	}else{

		return state.merge({
			board: board,
			turns: turns + 1
		})
	}
}

export function reset(state){
	return fromJS({
			board: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
			turns: 0
			})
}

export function start(state){
	return state.get('startPlayer', Math.round(Math.random()))
}