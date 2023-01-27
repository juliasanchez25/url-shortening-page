import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import UrlShortening from "../components/UrlShorteningComponent";
import "../styles/index.scss";
import { useState } from "react";
import { UrlProps } from "../types/url";

const Home = () => {
  const [urls, setUrls] = useState<UrlProps[]>([]);

  const loadUrl = async (originalUrl: string) => {
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
    );
    const { result } = await res.json();
    const { short_link } = result;
    const urlData: UrlProps = {
      url_link: short_link,
      originalUrl,
    };

    setUrls([...urls, urlData]);
    console.log(result);
  };

  return (
    <div>
      <div className="introduction-home-container">
        <div className="introduction-home-container__items">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <ButtonComponent />
        </div>
      </div>

      <UrlShortening loadUrl={loadUrl} />
      {urls?.map((url, index) => {
        return (
          <div key={index} className="short-url-list-container">
            <div className="short-url-list-container__items">
              <div className="short-url-list-container__items__original">
                {url && <a href="#">{url.originalUrl}</a>}
              </div>
              <div className="short-url-list-container__items__short">
                {url && <a href="#">{url.url_link}</a>}
              </div>
              <button>Copy</button>
            </div>
          </div>
        );
      })}

      <div className="advanced-statistics-container">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
        <div className="advanced-statistics-container__list-items">
          <div className="advanced-statistics-container__list-items__item">
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links helps instil confidence in your
              content.
            </p>
          </div>
          <div className="advanced-statistics-container__list-items__item">
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="advanced-statistics-container__list-items__item">
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awaraness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="boost-links-container">
        <h1>Boost your links today</h1>
        <ButtonComponent />
      </div>
      <footer>
        <h1>Shortly</h1>
        <div className="footer-links-container">
          <div className="footer-links-container__item">
            <h3>Features</h3>
            <a href="">Link Shortening</a>
            <a href="">Branded Links</a>
            <a href="">Analytics</a>
          </div>
          <div className="footer-links-container__item">
            <h3>Resources</h3>
            <a href="">Blog</a>
            <a href="">Developers</a>
            <a href="">Support</a>
          </div>
          <div className="footer-links-container__item">
            <h3>Company</h3>
            <a href="">About</a>
            <a href="">Our Team</a>
            <a href="">Careers</a>
            <a href="">Contact</a>
          </div>
        </div>
        <div className="social-medias-container">
          <div className="social-medias-container__item">
            <p>facebook</p>
          </div>
          <div className="social-medias-container__item">
            <p>twitter</p>
          </div>
          <div className="social-medias-container__item">
            <p>pinterest</p>
          </div>
          <div className="social-medias-container__item">
            <p>instagram</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
