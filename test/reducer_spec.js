import {Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {

	it('handles PLACE', ()=> {
		const state = fromJS({
			moves: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
			turns: 0,
			startPlayer: 1
		})
		const action = {type: 'PLACE', move:4}
		const nextState = reducer(state, action)
		expect(nextState).to.equal(fromJS({
			moves: [[-1,-1,-1],[-1,1,-1],[-1,-1,-1]],
			turns: 1,
			startPlayer:1
		}))
	})

	it('handles RESET', () => {
		const state = fromJS({
			moves: [[1,-1,0],[-1,-1,1],[-1,0,-1]],
			turns: 4,
			startPlayer: 1
		})
		const action = {type: 'RESET'}
		const nextState = reducer(state, action)

		expect(nextState).to.equal(fromJS({
			moves: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
			turns: 0
		}))
	})

	it('play a game', () => {
		const state = fromJS({
			moves: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
			turns: 0,
			startPlayer: 1
		})

		const actions = [
			{type: 'PLACE', move:0},
			{type: 'PLACE', move:1},
			{type: 'PLACE', move:2},
			{type: 'PLACE', move:5},
			{type: 'PLACE', move:8},
			{type: 'PLACE', move:7},
			{type: 'PLACE', move:6},
			{type: 'PLACE', move:3},
			{type: 'PLACE', move:4}
		]

		const finalState = actions.reduce(reducer, state)

		expect(finalState).to.equal(fromJS({
			winner: 1
		}))
	})
})