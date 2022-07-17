import venueIcon from "./Icons/icons8-location-48.png"
import bellIcon from "./Icons/bellIcon.png"
export default function MatchCard({
  matchType,
  matchStatus,
  venue,
  homeTeamName,
  awayTeamName,
  matchDate
}) {
  return (
    <>
      <div className="text-white flex flex-col p-4 rounded-lg bg-slate-700	">
      <div className="flex justify-between p-2">

      <div className="grid gorw grid-cols-2 grid-rows-1 p-1">
        <div>{matchType}</div>
        <div>{matchStatus}</div>
        <div className="col-span-3 flex gap-1 align-middle"><img alt="img" className="h-5 w-5" src={venueIcon} /> {venue}</div>
      </div>

      <button className="" > <img src={bellIcon} alt='bell' className="h-10 w-10"/> </button>
      </div>
      
        <div>{homeTeamName}</div>
        <div>{awayTeamName}</div>
        <div>{matchDate}</div>
      </div>
      <br />
      <br />
    </>
  );
}

// match status -> upcomming
// match type -> t20 
