type UrlProps = {
  loadUrl: (originalUrl: string) => Promise<void>;
};

import React from "react";
import { useState, KeyboardEvent } from "react";
import "../styles/UrlShorteningComponent.scss";

const UrlShortening = ({ loadUrl }: UrlProps) => {
  const [originalUrl, setOriginalUrl] = useState("");

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
          placeholder="Shorter a link here..."
          onChange={(e) => setOriginalUrl(e.target.value)}
          onKeyDown={handleKeyDown}
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
