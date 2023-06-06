import React, { useState, useContext, useEffect } from "react";

import Speech from "react-speech";

import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const countries = [
    { id: "FR", name: "French", lang: "fr-FR" },
    { id: "IT", name: "Italy", lang: "it-IT" },
    { id: "NL", name: "Nederlands", lang: "nl-NL" },
    { id: "EN", name: "English", lang: "en-US" },
    { id: "ES", name: "Espanol", lang: "es-ES" },
    { id: "PL", name: "Polish", lang: "pl-PL" },
  ];

  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [translateFrom, setTranslateFrom] = useState("EN");
  const [translateTo, setTranslateTo] = useState("FR");
  const [langArr, setLangArr] = useState([]);

  const [sortFromText, setSortFromText] = useState("EN");
  const [sortToText, setSortToText] = useState("FR");

  const generateQoute = async () => {
    const response = await axios.get("https://api.quotable.io/random");
    setFromText(response.data.content);
    setTranslateFrom("EN");
    document.querySelector("textarea").value = response.data.content;
  };

  const translateText = async () => {
    if (!fromText) return;
    const response = await axios.get(
      `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${translateFrom}|${translateTo}`
    );
    setToText(response.data.responseData.translatedText);
  };

  function handleTeamSelectionChange(event) {
    setTranslateFrom(event.target.value);
  }

  function handleTeamSelectionChangee(event) {
    setTranslateTo(event.target.value);
  }

  function setFromTextt(event) {
    setFromText(event.target.value);
  }

  function setSortSelectFrom(event) {
    setSortFromText(event.target.value);
  }

  function setSortSelectTo(event) {
    setSortToText(event.target.value);
  }

  function addToLearn() {
    const obj = {
      id: Date.now(),
      primaryLang: translateFrom,
      translateLang: translateTo,
      fromText: fromText,
      toText: toText,
    };
    const updateLang = [...langArr, obj];
    setLangArr(updateLang);
  }

  function getLanguageById(id) {
    const country = countries.find((country) => country.id === id);
    return country.lang;
  }

  const handleSpeak = (text, lang) => {
    const speak = new SpeechSynthesisUtterance(text);
    const language = getLanguageById(lang);
    speak.lang = language;
    window.speechSynthesis.speak(speak);
  };

  const handleDelete = (lang) => {
    const newLangArr = [...langArr];
    const index = newLangArr.findIndex((item) => item.id === lang.id);
    if (index !== -1) {
      newLangArr.splice(index, 1);
      setLangArr(newLangArr);
    }
  };

  return (
    <AppContext.Provider
      value={{
        setFromText,
        fromText,
        setToText,
        toText,
        setTranslateFrom,
        translateFrom,
        setTranslateTo,
        translateTo,
        setLangArr,
        setSortFromText,
        countries,
        handleTeamSelectionChange,
        handleTeamSelectionChangee,
        setFromTextt,
        addToLearn,
        translateText,
        addToLearn,
        sortFromText,
        langArr,
        setSortToText,
        sortToText,
        setSortSelectFrom,
        setSortSelectTo,
        handleSpeak,
        handleDelete,
        generateQoute,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
