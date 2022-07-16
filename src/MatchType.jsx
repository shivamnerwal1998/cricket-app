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
    <div className="flex text-white max-w-fit gap-10 ">
      <button onClick={setAll}>ALL</button>
      <button onClick={setInternational}>INTERNATIONAL</button>
      <button onClick={setDomestic}>DOMESTIC</button>
    </div>
    </div>
  );
}
