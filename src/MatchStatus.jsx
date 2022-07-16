export default function MatchStatus({ matchStatus, setMatchStatus }) {
  const setLive = () => {
    if (matchStatus !== "live") {
      setMatchStatus("live");
    }
  };

  const setUpcomming = () => {
    if (matchStatus !== "upcomming") {
      setMatchStatus("upcomming");
    }
  };

  const setCompleted = () => {
    if (matchStatus !== "completed") {
      setMatchStatus("completed");
    }
  };

  return (
    <div className="flex text-white justify-around">
      <button onClick={setUpcomming}>Upcomming</button>
      <button onClick={setLive}>Live</button>
      <button onClick={setCompleted}>Results</button>
    </div>
  );
}
