import { generateEmptyArray } from "../../utils";

function SeasonFilter({ seasons }) {
  const seasonsArr = generateEmptyArray(seasons);

  return (
    <div
      className="btn-group mb-3"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <SeasonButton number="All" />

      {seasonsArr.map((_, i) => (
        <SeasonButton number={i + 1} key={i} />
      ))}
    </div>
  );
}

function SeasonButton({ number }) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
        checked
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio1">
        {number === "All" ? "All" : `S${number}`}
      </label>
    </>
  );
}

export default SeasonFilter;
