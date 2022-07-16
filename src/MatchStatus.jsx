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
    <div>
      <h2>status</h2>
      <button onClick={setLive}>live</button>
      <button onClick={setUpcomming}>upcomming</button>
      <button onClick={setCompleted}>completed</button>
    </div>
  );
}
