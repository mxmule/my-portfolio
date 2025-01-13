import React from "react";
import banner from "../../assets/banner-modal.png";
import { BannerStyle } from "./styles";

export const Banner: React.FC = () => {
  return (
    <BannerStyle>
      <div className="banner text-center h-screen flex flex-col justify-center items-center">
        <h1 className="big-text text-white whitespace-nowrap">
          <span>
            Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule
            — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh
            Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule
          </span>
        </h1>
        <div className="digital-ball">
          <div className="globe">
            <div className="globe-wrap">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle-hor"></div>
              <div className="circle-hor-middle"></div>
            </div>
          </div>
        </div>
        <img src={banner} alt="banner" className="main-img mx-auto mt-auto" />
      </div>
    </BannerStyle>
  );
};
