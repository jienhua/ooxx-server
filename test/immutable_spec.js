import {expect} from 'chai'
import {List, Map} from 'immutable'

describe('immutability', () => {

	describe('a number', () => {

		function increment(currentState) {
			return currentState +1
		}

		it('is immutable', () => {
			let state = 42
			let nextState = increment(state)

			expect(nextState).to.equal(43)
			expect(state).to.equal(42)
		})
	})

	describe('a list', () => {

		function addMovie(currentState, movie) {
			return currentState.push(movie);
		}

		it('is immutable', () => {
			let state = List.of('1', '2')
			let nextState = addMovie(state, '3')

			expect(nextState).to.equal(List.of('1','2','3'))
			expect(state).to.equal(List.of('1','2'))
		})
	})

	describe('a tree', () => {

		function addItem(currentState, item){
			// return currentState.set(
			// 	'thing',
			// 	currentState.get('thing').push(item)
			// )
			return currentState.update('thing', thing => thing.push(item))
		}

		it('is immutable', () => {
			let state = Map({
				thing: List.of('1', '2')
			})
			let nextState = addItem(state, '3')

			expect(nextState).to.equal(Map({
				thing: List.of('1','2','3')
			}))
			expect(state).to.equal(Map({
				thing: List.of('1', '2')
			}))
		})
	})
})