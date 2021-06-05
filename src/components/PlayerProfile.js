import axios from "../axios";
import requests from "../requests";
import { useEffect, useState } from "react";
import Stats from "./Stats";

const PlayerProfile = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    setLoading(true);
    const endpoint = requests.getPlayers + "/" + id;

    axios
      .get(endpoint)
      .then((res) => {
        setPlayer(res.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const showContent = () => {
    return !loading ? (
      <Stats player={player} />
    ) : (
      <div className="ui active centered inline loader" />
    );
  };

  return (
    <div>
      <h1 className="ui header" style={{ marginTop: "20px" }}>
        Player Profile
      </h1>
      <div className="ui raised very padded text container segment">
        {showContent()}
      </div>
    </div>
  );
};

export default PlayerProfile;
