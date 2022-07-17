import venueIcon from "./Icons/icons8-location-48.png"
import bellIcon from "./Icons/bellIcon.png"
export default function MatchCard({
  matchType,
  matchNumber,
  matchStatus,
  venue,
  homeTeamName,
  awayTeamName,
  matchDate
}) {
  return (
    <>
      <div className="text-white flex flex-col p-4 gap-y-4 rounded-lg bg-slate-700	">
        <div className="flex justify-between p-2">

          <div className="grid gorw grid-cols-2 grid-rows-1 p-1">
            <div className="w-24 sm:w-30 p-1 text-s
                        sm:p-2 sm:text-l text-center">{matchNumber}</div>
            <div className="w-24 sm:w-30 p-1 text-s
                        sm:p-2 sm:text-l text-center
           rounded-3xl  border-2 border-indigo-300 text-indigo-300">{matchStatus}</div>
            <div className="col-span-3 flex gap-1 align-middle"><img alt="img" className="h-5 w-5" src={venueIcon} /> {venue}</div>
          </div>

          <button className=" bg-slate-800 w-10 h-10 rounded-lg" > <img src={bellIcon} alt='bell' className="h-10 w-10 rounded-lg" /> </button>
        </div>
        <div className="flex justify-between align-middle p-4 bg-slate-800 rounded-sm">

          <div>{homeTeamName}</div>
          <div className=" w-20 sm:w-24  p-1 text-xs
         sm:p-2 sm:text-sm text-center rounded-3xl  border-2 border-teal-300 text-teal-300">{matchType}</div>
          <div>{awayTeamName}</div>
        </div>
        <div className="flex justify-center align-middle p-4 bg-slate-800 rounded-sm">
          <div>{matchDate}</div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
}

// match status -> upcomming
// match type -> t20 
