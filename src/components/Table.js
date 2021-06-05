import React from "react";

const Table = ({ seasonAvg }) => {
  return (
    // <div className="ui huge statistics" style={{ marginTop: "20px" }}>
    //   <div className="statistic">
    //     <div className="value">{seasonAvg.games_played}</div>
    //     <div className="label">Games Played</div>
    //   </div>
    //   <div className="statistic">
    //     <div className="value">{seasonAvg.pts}</div>
    //     <div className="label">Points</div>
    //   </div>
    //   <div className="statistic">
    //     <div className="value">{seasonAvg.reb}</div>
    //     <div className="label">Rebounds</div>
    //   </div>
    //   <div className="statistic">
    //     <div className="value">{seasonAvg.ast}</div>
    //     <div className="label">Assists</div>
    //   </div>
    //   <div className="statistic">
    //     <div className="value">{seasonAvg.stl}</div>
    //     <div className="label">Steals</div>
    //   </div>
    //   <div className="statistic">
    //     <div className="value">{seasonAvg.blk}</div>
    //     <div className="label">Blocks</div>
    //   </div>
    //   <div className="statistic">
    //     <div className="value">{seasonAvg.fg_pct}</div>
    //     <div className="label">FG%</div>
    //   </div>
    //   <div className="statistic">
    //     <div className="value">{seasonAvg.fg3_pct}</div>
    //     <div className="label">3P%</div>
    //   </div>
    // </div>

    <table className="ui striped celled table">
      <thead>
        <tr>
          <th>Season</th>
          <th>GP</th>
          <th>PPG</th>
          <th>APG</th>
          <th>RPG</th>
          <th>STL</th>
          <th>BLK</th>
          <th>FG%</th>
          <th>3P%</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Season">
            {seasonAvg.season}-{seasonAvg.season + 1}
          </td>
          <td data-label="GP">{seasonAvg.games_played}</td>
          <td data-label="PPG">{seasonAvg.pts}</td>
          <td data-label="APG">{seasonAvg.ast}</td>
          <td data-label="RPG">{seasonAvg.reb}</td>
          <td data-label="STL">{seasonAvg.stl}</td>
          <td data-label="BLK">{seasonAvg.blk}</td>
          <td data-label="FG%">{seasonAvg.fg_pct}</td>
          <td data-label="3P%">{seasonAvg.fg3_pct}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
