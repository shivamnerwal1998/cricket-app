export default function MatchType({ matchType, setMatchType }) {
  const setAll = () => {
    if (matchType !== "all") {
      setMatchType("all");
    }
  };

  const setInternational = () => {
    if (matchType !== "international") {
      setMatchType("international");
    }
  };

  const setDomestic = () => {
    if (matchType !== "domestic") {
      setMatchType("domestic");
    }
  };

  return (
    <div className="flex mb-10 justify-around">
      <div className="flex text-white max-w-fit gap-2 sm:gap-10 ">
        <button 
        className={`w-28 sm:w-32  p-1 text-xs
         sm:p-2 sm:text-sm text-center
       ${matchType === "all" && " rounded-3xl  border-4   border-teal-300	 text-teal-300	"} `
        } onClick={setAll}>ALL</button>
        <button className={`w-28 p-1 text-xs	 sm:w-32	sm:p-2 sm:text-sm text-center ${matchType === "international" && " border-4 rounded-3xl   border-teal-300	 text-teal-300	"} `} onClick={setInternational}>INTERNATIONAL</button>
        <button className={`w-28  p-1 text-xs sm:w-32	sm:p-2 sm:text-sm text-center ${matchType === "domestic" && " border-4 rounded-3xl   border-teal-300	 text-teal-300"}`} onClick={setDomestic}>DOMESTIC</button>
      </div>
    </div>
  );
}
