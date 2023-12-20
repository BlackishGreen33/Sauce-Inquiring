import React, { useState } from "react";
import { Link } from "react-router-dom";

type SimplifiedChineseProps = {};

const SimplifiedChinese: React.FC<SimplifiedChineseProps> = () => {
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

  const handleLinkAClick = () => {
    alert("学术研究中，梯子是您必要的工具，而该工具请自备。");
  };

  const handleLinkBClick = () => {
    alert("低能儿，以为天上会掉鸡腿？");
  };

  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">语言</button>
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
            <h2>番号查询</h2>
            <div className="inputBox">
              <input
                type="text"
                required
                id="title1"
                value={nHentai}
                onChange={(e) => setNHentai(e.target.value)}
              />
              <span>nHentai (6位数)</span>
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
              <span>wnacg (5位数)</span>
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
              <span>18comic (6位数)</span>
              <i></i>
            </div>

            <div className="links">
              <a id="linkA" href="#" onClick={handleLinkAClick}>
                没梯子怎么办？
              </a>
              <a id="linkB" href="#" onClick={handleLinkBClick}>
                一键科学上网
              </a>
            </div>

            <input
              type="submit"
              value="发车啰"
              id="bnt"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimplifiedChinese;
