import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import {addMove, } from '../src/core'

describe('application logic', () => {

	describe('addMove', () => {

		it('add a movie to the state', () => {
			const state = fromJS({
				board: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
				turns: 0,
				startPlayer: 0
			})
			const move = 0
			
			const nextState = addMove(state, move)
			expect(nextState).to.equal(fromJS({
				board: [[0,-1,-1],[-1,-1,-1],[-1,-1,-1]],
				turns:1,
				startPlayer: 0
			}))
		})


		it('add a movie to state 2', () =>{
			const state = fromJS({
				board : [[0,-1,-1],[-1,-1,-1],[-1,-1,-1]],
				turns: 1,
				startPlayer: 0
			})
			const move = 3

			const nextState = addMove(state, move)
			expect(nextState).to.equal(fromJS({
				board: [[0,-1,-1],[1,-1,-1],[-1,-1,-1]],
				turns: 2,
				startPlayer: 0
			}))
		})
	})
	describe('check winner', () => {

		it('check winner', () =>{
			const state = fromJS({
				board: [[-1,0,-1],[1,-1,1],[-1,0,-1]],
				turns: 4,
				startPlayer:1
			})
			const move = 4
			const nextState = addMove(state, move)
			expect(nextState).to.equal(fromJS({
				winner: 1
			})) 
		})

		it('check winner 2', () =>{
			const state = fromJS({
				board: [[1,0,-1],[1,-1,1],[-1,0,-1]],
				turns: 5,
				startPlayer:1
			})
			const move = 4
			const nextState = addMove(state, move)
			expect(nextState).to.equal(fromJS({
				winner: 0
			})) 
		})
		
	})
})