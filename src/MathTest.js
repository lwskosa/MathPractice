import { mAdd, mSub, mMul, mDiv } from './MathUtils';

class MathTest {
  constructor() {
    this.problems = [];
  }

  addProblems(operation, numProblems, rangeA, rangeB, hardCount) {
    let newProblems;
    switch (operation) {
      case 'add':
        newProblems = mAdd(numProblems, rangeA, rangeB, hardCount);
        break;
      case 'sub':
        newProblems = mSub(numProblems, rangeA, rangeB, hardCount);
        break;
      case 'mul':
        newProblems = mMul(numProblems, rangeA, rangeB, hardCount);
        break;
      case 'div':
        newProblems = mDiv(numProblems, rangeA, rangeB, hardCount);
        break;
      default:
        newProblems = [];
    }
    this.problems = [...this.problems, ...newProblems];
  }

  getProblems() {
    return this.problems;
  }
}

export default MathTest;
