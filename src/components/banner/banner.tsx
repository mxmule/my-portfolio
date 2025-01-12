import React from "react";
import banner from "../../assets/banner-modal.png";
import { BannerStyle } from "./styles";

export const Banner: React.FC = () => {
  return (
    <BannerStyle>
      <div className="banner text-center">
        <h1 className="big-text text-white whitespace-nowrap">
          <span>
            Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule
            — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh
            Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule
          </span>
        </h1>
        <img src={banner} alt="banner" className="main-img mx-auto" />
      </div>
    </BannerStyle>
  );
};
