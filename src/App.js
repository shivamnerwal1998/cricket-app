import { useState, useEffect } from "react";
import MatchStatus from "./MatchStatus";
import MatchType from "./MatchType";
import MatchCard from "./MatchCard";
export default function App() {
  const [state, setState] = useState([
    {
      seriesID: "",
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
  // const [showName, setShowName] = useState(false);
  const VARIABLES = { matchType: matchType, matchStatus: matchStatus };

  const QUERY = `query ($matchType: String, $matchStatus:String){
    schedule(type: $matchType, status: $matchStatus, page: 1) {
      seriesID
      matchStatus
      matchNumber
      venue
      seriesName
      matchdate
      homeTeamName
      matchType
      awayTeamName
      teamsWinProbability {
        homeTeamPercentage
        awayTeamPercentage
      }
    }
  }`;

  const setResponse = (data) => {
    const response = data.map((obj) => {
      return {
        seriesID: obj.seriesID,
        matchStatus: obj.matchStatus,
        matchNumber: obj.matchNumber,
        venue: obj.venue,
        seriesName: obj.seriesName,
        matchdate: obj.matchdate,
        homeTeamName: obj.homeTeamName,
        matchType: obj.matchType,
        awayTeamName: obj.awayTeamName,
        teamsWinProbability: obj.teamsWinProbability
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchStatus, matchType]);





  return (
    <div className="bg-slate-800 min-h-screen">
      <h1 className="text-2xl font-bold text-white pt-4 pb-4 pl-4">Schedule</h1>
      <MatchStatus status={matchStatus} setMatchStatus={setMatchStatus} />
      <br />
      <MatchType matchType={matchType} setMatchType={setMatchType} />
      <br />


      <div className="grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3	 align-items: center min-w-fit p-2 sm:p-6">
        {state.map((data, index) => {


          return (
            <div className="flex flex-col justify-center align: center gap-5 p-2">

              <div className="text-white bg-slate-700 p-4 rounded-lg " >
                {data.seriesName}
              </div>

              <MatchCard
                matchType={data.matchType}
                matchNumber={data.matchNumber}
                matchStatus={data.matchStatus}
                venue={data.venue}
                homeTeamName={data.homeTeamName}
                awayTeamName={data.awayTeamName}
                matchDate={data.matchdate}
                teamsWinProbablity={data.teamsWinProbability}
              />
            </div>
          )
        })}
      </div>

    </div>
  );
}
