import React from "react";
import { Data } from "../Data/Data";

function Standings() {
  return (
    <div className="standings-container">
      <p className="club-header">Standings</p>
      <br />
      <table>
        <tr>
          <th>Pos</th>
          <th>Club</th>
          <th>Pl</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
        {Data.standings.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.position}</td>
              <td>
                <div className="name-container">
                  <img src={item.url} alt="team" className="table-img" />
                  <p>{item.name.short}</p>
                </div>
              </td>
              <td>{item.stats.played}</td>
              <td>{item.stats.goalDifference}</td>
              <td>{item.stats.points}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Standings;
