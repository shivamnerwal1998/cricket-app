export default function MatchStatus({ status, setMatchStatus }) {
  const setLive = () => {
    if (status !== "live") {
      setMatchStatus("live");
    }
  };

  const setUpcomming = () => {
    if (status !== "upcomming") {
      setMatchStatus("upcomming");
    }
  };

  const setCompleted = () => {
    if (status !== "completed") {
      setMatchStatus("completed");
    }
  };

  return (
    <div className="flex z-2 text-white">
      <div  className={`border-b-2 grow flex justify-center	 	${status === "upcomming" && "border-b-2 border-indigo-300 text-indigo-300"} ` }>
      <button className={ " "	 } onClick={setUpcomming}>Upcomming</button>
      </div>
      <div className={`border-b-2 flex justify-center grow ${status === "live" && "border-indigo-300 text-indigo-300	"}`}>
      <button className={ ` `	 } onClick={setLive}>Live</button>
      </div>
      <div className={`border-b-2 grow flex justify-center 	${status === "completed" && " border-indigo-300 text-indigo-300	"}`}>
      <button className={ `	${status === "completed" && " border-indigo-300 text-indigo-300	"} `	 } onClick={setCompleted}>Results</button>
      </div>
    </div>
  );
}
