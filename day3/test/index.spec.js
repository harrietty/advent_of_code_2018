const {expect} = require('chai');
const {getFabricCoords, countDuplicateCoords, solutionPart1, solutionPart2} = require('../');

describe('Part 1', () => {
  describe('getFabricCoords', () => {
    it('returns the correct coordinates', () => {
      // expect(getFabricCoords('#1 @ 1,3: 4x4')).to.eql(
      //   ['1,3', '2,3', '3,3', '4,3', '1,4', '2,4', '3,4', '4,4']
      // );

      expect(getFabricCoords('#1 @ 1,3: 5x4')).to.eql(
        ['1,3', '2,3', '3,3', '4,3', '5,3', '1,4', '2,4', '3,4', '4,4', '5,4',
        '1,5', '2,5', '3,5', '4,5', '5,5', '1,6', '2,6', '3,6', '4,6', '5,6']
      );
    });
  });

  describe('countDuplicateCoords', () => {
    it('returns a count of how many co-ords appear more than once in the list', () => {
      const list = ['1,3', '2,3', '3,3', '4,3', '1,4', '2,4', '3,4', '4,4', '1,3', '2,3', '3,3', '4,3'];
      expect(countDuplicateCoords(list)).to.equal(4);
    });
  });
  
  describe('solutionPart1', () => {
    it('gets correct solution with sample input', () => {
      const input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`

      expect(solutionPart1(input)).to.equal(4);
    });
  });
});

describe('Part 2', () => {
  describe('solutionPart2', () => {
    it('gets correct solution with sample input', () => {
      const input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`

      expect(solutionPart2(input)).to.equal('#3');
    });
  });
});
