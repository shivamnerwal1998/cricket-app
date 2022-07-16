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
    <div>
      <h2>type</h2>
      <button onClick={setAll}>All</button>
      <button onClick={setInternational}>International</button>
      <button onClick={setDomestic}>Domestic</button>
    </div>
  );
}
