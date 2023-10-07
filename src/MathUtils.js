import MathProblem from './MathProblem';

const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateProblems = (numProblems, minA, maxA, minB, maxB, operand, hardCount) => {
  const problems = [];
  let hardProblemsGenerated = 0;

  for (let i = 0; i < numProblems; i++) {
    let numA = getRandomNumberInRange(minA, maxA);
    let numB = getRandomNumberInRange(minB, maxB);

    if (numA < numB) {
      [numA, numB] = [numB, numA];
    }

    let problemSolution;

    switch (operand) {
      case '+':
        problemSolution = numA + numB;
        break;
      case '-':
        problemSolution = numA - numB;
        break;
      case 'x':
        problemSolution = numA * numB;
        break;
      case '/':
        problemSolution = numA / numB;
        break;
      default:
        problemSolution = 0;
    }

    if (hardProblemsGenerated < hardCount && String(problemSolution).slice(-1).match(/[123789]/)) {
      problems.push(new MathProblem(numA, operand, numB, null, problemSolution));
      hardProblemsGenerated++;
    } else {
      problems.push(new MathProblem(numA, operand, numB, null, problemSolution));
    }
  }

  return problems;
};

export const mAdd = (numProblems, rangeA, rangeB, hardCount) => {
  return generateProblems(numProblems, rangeA[0], rangeA[1], rangeB[0], rangeB[1], '+', hardCount);
};

export const mSub = (numProblems, rangeA, rangeB, hardCount) => {
  return generateProblems(numProblems, rangeA[0], rangeA[1], rangeB[0], rangeB[1], '-', hardCount);
};

export const mMul = (numProblems, rangeA, rangeB, hardCount) => {
  return generateProblems(numProblems, rangeA[0], rangeA[1], rangeB[0], rangeB[1], 'x', hardCount);
};

export const mDiv = (numProblems, rangeA, rangeB, hardCount) => {
  return generateProblems(numProblems, rangeA[0], rangeA[1], rangeB[0], rangeB[1], '/', hardCount);
};
