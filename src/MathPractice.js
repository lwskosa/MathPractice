import React, { useState, useEffect } from 'react';
import MathTest from './MathTest'; // Corrected the import statement
import ParentalDashboard from './ParentalDashboard';

const MathPractice = () => {
  const [mathTest, setMathTest] = useState(new MathTest());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timer, setTimer] = useState(30); // 30 seconds per problem
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    const test = new MathTest();
    test.mAdd(5, [1, 10], [1, 10], 2);
    setMathTest(test);
  }, []);

  useEffect(() => {
    let timerId;
    if (timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      handleNext();
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timer]);

  const handleNext = () => {
    const currentProblem = mathTest.problems[currentIndex];
    if (parseFloat(userAnswer) === currentProblem.solution) {
      setCorrectAnswers((prev) => prev + 1);
    }
    if (currentIndex < mathTest.problems.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setUserAnswer('');
      setTimer(30);
    } else {
      setShowDashboard(true);
    }
  };

  const currentProblem = mathTest.problems[currentIndex];

  return (
    <div>
      <h1>Matek Gyakorlás</h1>
      {showDashboard ? (
        <ParentalDashboard problems={mathTest.problems} correctAnswers={correctAnswers} />
      ) : (
        <>
          {currentProblem ? (
            <div className='container-sm'>
            <div className='row justify-content-center'>
              <div id='numA' className='col-1 text-info  fs-1 border border-1'>{currentProblem.numA}</div>
              <div id='numOperand' className='col-1 text-black fs-1 border border-1'>{currentProblem.operand}</div>
              <div id='numB' className='col-1 text-info  fs-1 border border-1'>{currentProblem.numB}</div>
              <input
                type="text"
                className='col-1 w-25 form-control text-light bg-dark fs-3 '
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            </div>
            <button className='btn btn-primary mb-3' onClick={handleNext}>Next</button>
            <div>Timer: {timer} seconds</div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </>
      )}
    </div>
  );
};

export default MathPractice;
