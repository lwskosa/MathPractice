import React from 'react';
import './index.css';

const formatNumber = (num) => {
  return Number.isInteger(num) ? num : parseFloat(num.toFixed(4));
};

const ParentalDashboard = ({ problems }) => {
  return (
    <div className='container justify-content-center'>
      <h1 className='text-danger'>Végeredmény</h1>
      <div className='row justify-content-center'>
        <div className='row-8 w-25 bg-secondary text-light '>
          <div className='col h5'>Kérdések száma</div>
          <div className='col h6'><strong>{problems.length}</strong></div>
        </div>
        <div className='row-12 w-25 bg-secondary text-light'>
          <div className='col h5'>Helyes Válaszok</div>
          <div className='col h6'><strong>{/* Insert correctAnswers count here */}</strong></div>
        </div>
        <div className='row-12 w-25 bg-secondary text-light'>
          <div className='col h5'>Értékelés:</div>
          <div className='col h6'><strong>{/* Insert percentage of correct answers here */}%</strong></div>
        </div>
      </div>
      <div className='container'>
        <strong className='h1'>Feladatok</strong>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">A oldal</th>
              <th scope="col">Művelet</th>
              <th scope="col">B oldal</th>
              <th scope="col">Válasz</th>
              <th scope="col">Megoldás</th>
            </tr>
          </thead>
          <tbody>
            {problems.map((problem, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{problem.numA}</td>
                <td>{problem.operand}</td>
                <td>{problem.numB}</td>
                <td>{formatNumber(problem.userAnswer)}</td>
                <td>{formatNumber(problem.problemSolution)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParentalDashboard;
