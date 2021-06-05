import PlayerPreview from "./PlayerPreview";

const Results = ({ players, onClick }) => {
  const listPlayers = players.map((player) => {
    return <PlayerPreview player={player} key={player.id} onClick={onClick} />;
  });

  return (
    <div>
      <h1 className="ui header">Search Results</h1>
      <div className="ui cards">{listPlayers}</div>
    </div>
  );
};

export default Results;
