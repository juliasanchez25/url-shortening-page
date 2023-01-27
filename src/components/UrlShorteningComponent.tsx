type UrlProps = {
  loadUrl: (originalUrl: string) => Promise<void>;
};

import React from "react";
import { useState, KeyboardEvent } from "react";
import "../styles/UrlShorteningComponent.scss";

const UrlShortening = ({ loadUrl }: UrlProps) => {
  const [originalUrl, setOriginalUrl] = useState("");

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Valor enviado:', inputValue);
    setInputValue('');
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUrl(originalUrl);
    }
  };

  return (
    <div className="short-url-container">
      <div className="short-url-container__item">
        <input
          type="text"
          value={inputValue}
          placeholder="Shorter a link here..."
          onChange={e => [setOriginalUrl(e.target.value),,setInputValue(e.target.value)]} 
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
        ></input>
        <button
          onClick={() => loadUrl(originalUrl)}
          onChange={(e) => {
            e.preventDefault();
          }}
        >
          Shorten it!
        </button>
      </div>
    </div>
  );
};

export default UrlShortening;
