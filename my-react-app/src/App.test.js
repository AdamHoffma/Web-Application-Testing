

import { strikeCount } from './App';


describe('App.js', () => {
  describe('strikeCount()', () => {
    it('counts by 1 until it hits 2 then resets to 0', () => {
      expect(strikeCount(0)).toBe(1)
    })
  })
})
