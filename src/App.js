import React from 'react';
import './style.css';

export default function App() {
  const [num, setNum] = React.useState(1);
  const [table, setTable] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  function handleChange() {
    setNum(Math.floor(Math.random() * 100));
    console.log(num);
  }

  return (
    <div>
      <h1>Table</h1>
      {table.map((ele) => (
        <table>
          <tr>
            <td>{num}</td>
            <td>*</td>
            <td>{ele}</td>
            <td>=</td>
            <td>{num * ele}</td>
          </tr>
        </table>
      ))}

      <button onClick={handleChange}>Change</button>
    </div>
  );
}
