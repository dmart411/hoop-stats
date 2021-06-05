import { useState } from "react";
import SearchBar from "./SearchBar";
import Results from "./Results";
import axios from "../axios";
import requests from "../requests";
import PlayerProfile from "./PlayerProfile";

function App() {
  const [results, setResults] = useState([]);
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const onSearchSubmit = (text) => {
    setLoading(true);
    axios
      .get(requests.getPlayers, {
        params: {
          search: text,
        },
      })
      .then((res) => setResults(res.data.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
    setShowResults(true);
    setShowProfile(false);
  };

  const onPlayerClick = (playerID) => {
    setId(playerID);
    setShowProfile(true);
    setShowResults(false);
  };

  const displayProfile = () => {
    return showProfile ? <PlayerProfile id={id} /> : <div></div>;
  };

  const displayResults = () => {
    if (loading) {
      return <div className="ui huge active centered inline loader" />;
    }

    return showResults ? (
      <Results players={results} onClick={onPlayerClick} />
    ) : (
      <div></div>
    );
  };

  return (
    <div className="ui container">
      <SearchBar
        onSubmit={onSearchSubmit}
        placeholder="Enter the name of a player"
      />
      {displayResults()}
      {displayProfile()}
    </div>
  );
}

export default App;
