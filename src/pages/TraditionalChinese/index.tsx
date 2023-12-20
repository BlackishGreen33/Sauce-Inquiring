import React, { useState } from "react";
import { Link } from "react-router-dom";

type TraditionalChineseProps = {};

const TraditionalChinese: React.FC<TraditionalChineseProps> = () => {
  const [nHentai, setNHentai] = useState("");
  const [wnacg, setWnacg] = useState("");
  const [R18comic, setR18comic] = useState("");

  const handleButtonClick = () => {
    if (nHentai === "" && wnacg === "") {
      window.location.href = `https://18comic.org/photo/${R18comic}`;
    }
    if (R18comic === "" && wnacg === "") {
      window.location.href = `https://nhentai.net/g/${nHentai}/`;
    }
    if (nHentai === "" && R18comic === "") {
      window.location.href = `https://www.wnacg.org/photos-index-aid-${wnacg}.html`;
    }
  };

  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">語言</button>
        <div className="dropdown-menu">
          <Link to="/TraditionalChinese" className="dropdown-item">
            繁體中文
          </Link>
          <Link to="/SimplifiedChinese" className="dropdown-item">
            简体中文
          </Link>
          <Link to="/English" className="dropdown-item">
            English
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="box">
          <div className="form">
            <h2>番號查詢</h2>
            <div className="inputBox">
              <input
                type="text"
                required
                id="title1"
                value={nHentai}
                onChange={(e) => setNHentai(e.target.value)}
              />
              <span>nHentai (6位數)</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="text"
                required
                id="title2"
                value={wnacg}
                onChange={(e) => setWnacg(e.target.value)}
              />
              <span>wnacg (5位數)</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="text"
                required
                id="title3"
                value={R18comic}
                onChange={(e) => setR18comic(e.target.value)}
              />
              <span>18comic (6位數)</span>
              <i></i>
            </div>

            <input
              type="submit"
              value="發車囉"
              id="bnt"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TraditionalChinese;
