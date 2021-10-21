import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Home.css";

const API_URL = "http://localhost:8000/url"

const Home = () => {
  const [shortenUrls, setShortenUrls] = useState([]);
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [shortenButtonText, setShortenButtonText] = useState("Shorten");

  const handleMakeShorten = async () => {
    console.log(process.env.REACT_APP_API_URL)
    setIsProcessing(true);
    try {
      const response = await axios.post(`${API_URL}/`, { originUrl: url })
      if (response.data) {
        setShortenUrls([...shortenUrls, { ...response.data.url, status: "Copy" }]);
        setUrl(response.data.shortenUrl);
        setShortenButtonText("Copy");
      } else {
        alert("Failed!");
      }
    } catch (e) {
      alert(e.message);
    }
    setIsProcessing(false);
  }

  const handleCopyUrl = (currentUrl) => {
    const newUrls = shortenUrls.map(url => {
      if (url.shortenUrl === currentUrl.shortenUrl) {
        return { ...url, status: "Copied!" }
      } else {
        return url;
      }
    })
    setShortenUrls(newUrls);

    navigator.clipboard.writeText(currentUrl.shortenUrl);

    setTimeout(() => {
      const newUrls = shortenUrls.map(url => {
        if (url.shortenUrl === currentUrl.shortenUrl) {
          return { ...url, status: "Copy" }
        } else {
          return url;
        }
      })
      setShortenUrls(newUrls);
    }, 1000)
  }

  return (
    <div className="home">
      <div className="home-banner row align-items-center">
        <div className="col-md-8">
          <h1 className="my-0">Short links, big results</h1>
          <p className="my-0">A URL shortener built with powerful tools to help you grow and protect your brand.</p>
          <p className="my-3">
            <button className="btn btn-primary btn-lg">Get Started for Free</button>
          </p>
        </div>
        <div className="col-md-4">

        </div>
      </div>
      <div className="bitly-stage">
        <div className="row align-items-center mb-5">
          <div className="col-md-9">
            <input type="text" className="form-control form-control-lg" value={url} onChange={(e) => { setUrl(e.target.value); setShortenButtonText("Shorten") }} />
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-primary btn-block btn-lg d-flex align-items-center justify-content-center"
              onClick={handleMakeShorten}
              disabled={isProcessing}
            >
              {isProcessing && <i className="spinner-border spinner-border-sm mr-1"></i>}
              {shortenButtonText}
            </button>
          </div>
        </div>
        <div className="shorten-url-list pb-4">
          {shortenUrls.length > 0 && (
            <ul className="list-group">
              {shortenUrls.map((url, index) => (
                <li className="list-group-item d-flex align-items-center" key={index}>
                  <span className="mr-auto">{url.originUrl}</span>
                  <span>{url.shortenUrl}</span>
                  <button className="btn btn-secondary ml-3" onClick={() => handleCopyUrl(url)}>{url.status}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
