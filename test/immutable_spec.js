import {expect} from 'chai';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutagle', () => {
      let state = 42;
      let nexState = increment(state);

      expect(nexState).to.equal(43);
      expect(state).to.equal(42);
    });
  });
});