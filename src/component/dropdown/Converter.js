import React, { useEffect, useState } from "react";
import axios from "axios";
function Converter({ text, selected }) {
  const [translated, settranslated] = useState("");
  useEffect(() => {
    const doTranslation = async () => {
      const data = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: selected.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      settranslated(data.data.data.translations[0].translatedText);
    };
    const saif = setTimeout(() => {
      doTranslation();
    }, 1000);
    return () => {
      clearTimeout(saif);
    };
  }, [text, selected]);
  return (
    <>
      <h1> transllation is</h1>
      <h2> {translated}</h2>
    </>
  );
}

export default Converter;
