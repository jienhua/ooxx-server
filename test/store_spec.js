import {Map, fromJS} from 'immutable'
import {expect} from 'chai'

import makeStore from '../src/store'

describe('store', () => {

	it('is a Redux store configured with the correct reducer', () => {
		const store = makeStore()
		expect(store.getState()).to.equal(fromJS({
			moves: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
			turns: 0
		}))


	})
})