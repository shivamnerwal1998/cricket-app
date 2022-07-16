import { useState, useEffect } from "react";
import MatchStatus from "./MatchStatus";
import MatchType from "./MatchType";
import MatchCard from "./MatchCard";

export default function App() {
  const [state, setState] = useState([
    {
      matchStatus: "",
      matchNumber: "",
      venue: "",
      seriesName: "",
      matchdate: "",
      homeTeamName: "",
      matchType: "",
      awayTeamName: ""
    }
  ]);

  const [matchStatus, setMatchStatus] = useState("upcomming");
  const [matchType, setMatchType] = useState("all");
  const VARIABLES = { matchType: matchType, matchStatus: matchStatus };

  const QUERY = `query ($matchType: String, $matchStatus:String){
    schedule(type: $matchType, status: $matchStatus, page: 1) {
      matchStatus
      matchNumber
      venue
      seriesName
      matchdate
      homeTeamName
      matchType
      awayTeamName
    }
  }`;

  const setResponse = (data) => {
    const response = data.map((obj) => {
      return {
        matchStatus: obj.matchStatus,
        matchNumber: obj.matchNumber,
        venue: obj.venue,
        seriesName: obj.seriesName,
        matchdate: obj.matchdate,
        homeTeamName: obj.homeTeamName,
        matchType: obj.matchType,
        awayTeamName: obj.awayTeamName
      };
    });
    setState(response);
  };

  const setData = (data) => {
    const response = data?.data?.schedule;
    setResponse(response);
  };

  useEffect(() => {
    fetch("https://api.devcdc.com/cricket", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: QUERY,
        variables: VARIABLES
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [matchStatus, matchType]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <MatchType matchType={matchType} setMatchType={setMatchType} />
      {matchType}
      <br />

      <MatchStatus status={matchStatus} setMatchStatus={setMatchStatus} />
      {matchStatus}
      <br />

      {state.map((data) => (
        <MatchCard
          //seriesName={data.seriesName}
          matchType={data.matchType}
          matchStatus={data.matchStatus}
          venue={data.venue}
          homeTeamName={data.homeTeamName}
          awayTeamName={data.awayTeamName}
          matchdate={data.matchdate}
        />
      ))}
    </div>
  );
}
