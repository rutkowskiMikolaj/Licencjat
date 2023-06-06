import { useGlobalContext } from "../context";
import Voice from "../assets/Voice.svg";

const Collection = () => {
  const {
    sortFromText,
    setSortSelectFrom,
    langArr,
    setSortSelectTo,
    sortToText,
    handleSpeak,
    handleDelete,
  } = useGlobalContext();
  return (
    <section className="wrap">
      <div className="collection">
        <div className="collection__lang-conatiner">
          <p className="collection__lang">Primary lang</p>
          <select
            name=""
            id=""
            className="collection__select"
            value={sortFromText}
            onChange={setSortSelectFrom}
          >
            {langArr
              .filter(
                (lang, index, self) =>
                  self.findIndex((t) => t.primaryLang === lang.primaryLang) ===
                  index
              )
              .map((lang) => (
                <option key={lang.primaryLang}>{lang.primaryLang}</option>
              ))}
          </select>
        </div>
        <div className="collection__lang-conatiner">
          <p className="collection__lang">Primary lang</p>
          <select
            name=""
            id=""
            className="collection__select"
            value={sortToText}
            onChange={setSortSelectTo}
          >
            {langArr
              .filter(
                (lang, index, self) =>
                  self.findIndex(
                    (t) => t.translateLang === lang.translateLang
                  ) === index
              )
              .map((lang) => (
                <option key={lang.translateLang}>{lang.translateLang}</option>
              ))}
          </select>
        </div>
      </div>

      {langArr
        .filter(
          (lang) =>
            lang.primaryLang == sortFromText && lang.translateLang == sortToText
        )
        .map((lang) => (
          <div>
            <p className="collection__about">Translated text:</p>
            <div className="collection__langs-container">
              <div
                className="collection__langs"
                onClick={() => handleSpeak(lang.fromText, lang.primaryLang)}
              >
                <p className="collection__text">{lang.fromText}</p>
                <img className="collection__icon" src={Voice} />
              </div>
              <div
                className="collection__langs"
                onClick={() => handleSpeak(lang.toText, lang.translateLang)}
              >
                <p className="collection__text">{lang.toText}</p>
                <img src={Voice} className="collection__icon" />
              </div>
              <button
                className="collection__button"
                onClick={() => handleDelete(lang)}
              >
                Learned
              </button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Collection;
