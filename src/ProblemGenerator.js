// ProblemGenerator.js
export const generateProblems = (numProblems, aDigits, bDigits, hardRatio) => {
    const problems = [];
    for (let i = 0; i < numProblems; i++) {
      const A = Math.floor(Math.random() * (Math.pow(10, aDigits) - Math.pow(10, aDigits - 1)) + Math.pow(10, aDigits - 1));
      const B = Math.floor(Math.random() * (Math.pow(10, bDigits) - Math.pow(10, bDigits - 1)) + Math.pow(10, bDigits - 1));
      const operator = ['+', '-', '*', ':'][Math.floor(Math.random() * 4)];
      let answer;
      switch (operator) {
        case '+':
          answer = A + B;
          break;
        case '-':
          answer = A - B;
          break;
        case '*':
          answer = A * B;
          break;
        case ':':
          answer = A / B;
          break;
        default:
          answer = 0;
      }
      problems.push({ A, B, operator, answer });
    }
    return problems;
  };
  