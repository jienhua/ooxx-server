import {addMove, start, reset, INITIAL_STATE} from './core'

export default function reducer(state = INITIAL_STATE, action){
	// console.log(state)
	switch (action.type) {
		case 'PLACE':
			return addMove(state, action.move)
		case 'START':
			return start(state)
		case 'RESET':
			return reset(state)	
	}
	return state
}