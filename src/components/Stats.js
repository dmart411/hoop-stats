import { useEffect, useState } from "react";
import Table from "./Table";
import Selector from "./Selector";
import Dropdown from "./Dropdown";
import axios from "../axios";
import requests from "../requests";

const Stats = ({ player }) => {
  const options = [];
  const baseSeason = 2020;
  for (var i = 0; i < 40; i++) {
    options.push({
      text: baseSeason - i + "-" + (baseSeason - i + 1),
      value: baseSeason - i,
    });
  }

  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState(options[0]);
  const [seasonAvg, setSeasonAvg] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(requests.getSeasonAverages, {
        params: {
          season: season.value,
          player_ids: [player.id],
        },
      })
      .then((res) => {
        setSeasonAvg(res.data.data[0]);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .get(requests.getStats, {
    //     params: {
    //       player_ids: [player.id],
    //       postseason: postseason,
    //     },
    //   })
    //   .then((res) => {
    //     setStats(res.data.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [season, player]);

  const displayWeight = () => {
    return player.height_feet ? (
      <div>
        <b>Weight:</b> {player.weight_pounds} lbs
      </div>
    ) : (
      <div> </div>
    );
  };

  const displayHeight = () => {
    return player.height_feet ? (
      <div>
        <b>Height:</b> {player.height_feet}'{player.height_inches}''
      </div>
    ) : (
      <div> </div>
    );
  };

  const displayPosition = () => {
    return player.position ? (
      <div>
        <b>Position:</b> {player.position}
      </div>
    ) : (
      <div> </div>
    );
  };

  const displayTable = () => {
    if (loading) {
      return <div className="ui active centered inline loader" />;
    }

    return seasonAvg ? (
      <Table seasonAvg={seasonAvg} />
    ) : (
      <div className="ui message">
        <p>No stats for this season.</p>
      </div>
    );
  };

  return (
    <div>
      <h2 className="ui header">
        {player.first_name} {player.last_name}
      </h2>
      {displayHeight()}
      {displayWeight()}
      {displayPosition()}
      <div>
        <b>Team:</b> {player.team.full_name}
      </div>
      <div className="ui divider"></div>
      <div>
        {/* <Selector
          placeholder={season + "-" + (season + 1)}
          options={options}
          onChange={(value) => {
            setSeason(value);
          }
        /> */}
        <Dropdown
          label="Season:"
          options={options}
          selected={season}
          onSelectedChange={setSeason}
        />
      </div>
      {displayTable()}
    </div>
  );
};

export default Stats;
