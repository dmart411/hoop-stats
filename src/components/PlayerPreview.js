const PlayerPreview = ({ player, onClick }) => {
    
  return (
    <div className="card" onClick={()=>{onClick(player.id)}} style={{ width: "12%"}}>
      <div className="content">
        <div className="header">{player.first_name} {player.last_name}</div>
        <div className="meta">{player.position}</div>
        <div className="description">{player.team.full_name}</div>
      </div>
    </div>
  );
};

export default PlayerPreview;