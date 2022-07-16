export default function MatchCard({
  matchStatus,
  venue,
  homeTeamName,
  awayTeamName,
  matchDate
}) {
  return (
    <>
      <div>
        <div>{matchStatus}</div>
        <div>{venue}</div>
        <div>{homeTeamName}</div>
        <div>{awayTeamName}</div>
        <div>{matchDate}</div>
      </div>
      <br />
      <br />
    </>
  );
}
