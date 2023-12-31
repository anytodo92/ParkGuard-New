import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Helmet } from "react-helmet";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Images, Icons } from "../../../utils/assets"

import {
  ScrollPostitionType
} from "../../../@types";
import {
  MainHeaderWrapper
} from "./styled";

let startPosY: number = 0;

const MainHeader: React.FC = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState<string>("/");
  const [linkList, setLinkList] = useState<Array<any>>([
    {
      title: "ParkGuard",
      path: "/park-guard",
    },
    {
      title: "ParkGO",
      path: "/park-go",
    },
    {
      title: "Kontakt",
      path: "/#kontakt",
    },
  ]);

  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [stickyBar, setStickyBar] = useState<boolean>(false);
  const [toggleStatus, setToggleSetatus] = useState<boolean>(false);
  useScrollPosition(({ prevPos, currPos }: ScrollPostitionType) => {
    if (Math.abs(currPos.y) > 60) {
      setStickyBar(true);
      setToggleSetatus(false);
    } else {
      setToggleSetatus(false);
      setStickyBar(false);
    }
  });

  const toggleMenu = () => {
    setToggleSetatus(!toggleStatus);
  }

  return (
    <MainHeaderWrapper className={`navbar ${stickyBar ? "sticky-bar" : "normal-bar"} ${toggleStatus ? "open" : ""}`}>
      <div className="content">        
        <div className="logo">
          <a href="/">
            <img src={Images.LogoUrl} width="64" height="63" alt="" />
          </a>
          <div
            className="toggle-btn"
            onClick={toggleMenu}
          >
            <img src={Icons.MenuBlackUrl} />
          </div>
        </div>
        <div className="control">
          {/*<div className="func"><button>Busse erhalten?</button></div>*/}
          <ul className="menu">
          
          {linkList.map((data, index) =>
            <li key={index} className={`${index < 2 ? "btn" : "" } ${(data.path === location.pathname) ? "active" : ""}`}>
              <Link to={data.path}>{data.title}</Link>
            </li>
          )}
          </ul>
        </div>        
      </div>
    </MainHeaderWrapper>
  )
};

export default MainHeader;        