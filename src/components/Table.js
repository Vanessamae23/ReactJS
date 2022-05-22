
import { useState } from 'react';
import './Table.css';

function Table(props) {

  return (
    <table className="table">
      <thead>
          <tr>
              <td>Player</td>
              <td>Email</td>
              <td>Experience</td>
              <td>Level</td>
          </tr>
      </thead>
      <tbody>
          { props.players.map((item, key) => {
              return (
                  <tr key={key}>
                      <td>{item.player}</td>
                      <td>{item.email}</td>
                      <td>{item.experience}</td>
                      <td>{item.level}</td>
                  </tr>
              )
          })}
      </tbody>
    </table>
  );
}

export default Table;