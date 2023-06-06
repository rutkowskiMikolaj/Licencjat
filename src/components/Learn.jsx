import Voice from "../assets/Voice.svg";
import { useGlobalContext } from "../context";

const Learn = () => {
  const {
    countries,
    translateFrom,
    handleTeamSelectionChange,
    translateTo,
    handleTeamSelectionChangee,
    translateText,
    setFromTextt,
    fromText,
    toText,
    addToLearn,
    generateQoute,
    handleSpeak,
  } = useGlobalContext();
  return (
    <div className="learn">
      <div className="learn__container">
        <div className="learn__select-container">
          <p className="learn__text">primary lang</p>
          <select
            className="learn__select"
            value={translateFrom}
            onChange={handleTeamSelectionChange}
          >
            {countries.map((country) => (
              <option key={country.id}>{country.id}</option>
            ))}
          </select>
        </div>
        <button onClick={generateQoute} className="learn__button">
          Generate qoute
        </button>
        <textarea className="learn__textarea qoute" onChange={setFromTextt}>
          {fromText}
        </textarea>
        <img
          src={Voice}
          className="learn__icon"
          onClick={() => handleSpeak(fromText, translateFrom)}
        />
      </div>
      <button className="learn__translate" onClick={translateText}>
        Translate
      </button>
      <div className="learn__container">
        <div className="learn__select-container">
          <p className="learn__text">translate lang</p>
          <select
            className="learn__select"
            value={translateTo}
            onChange={handleTeamSelectionChangee}
          >
            {countries.map((country) => (
              <option key={country.id}>{country.id}</option>
            ))}
          </select>
        </div>
        <button className="learn__button" onClick={addToLearn}>
          add to collection
        </button>
        <textarea className="learn__textarea" value={toText}>
          {toText}
        </textarea>
        <img
          src={Voice}
          className="learn__icon"
          onClick={() => handleSpeak(toText, translateTo)}
        />
      </div>
    </div>
  );
};

export default Learn;
