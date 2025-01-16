import React from "react";
import banner from "../../assets/banner-modal.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import { BannerStyle } from "./styles";
import { Magnetic } from "../ui/magnetic";

export const Banner: React.FC = () => {
  const springOptions = { bounce: 0.1 };
  

  return (
    <BannerStyle>
      <div className="header m-10 text-left flex justify-between items-center">
        <div className="logo">
          <span className="text-xl">©&nbsp;</span>
          <button className="name-btn whitespace-nowrap inline-flex items-center text-xl transition-all duration-200 overflow-hidden">
            <span className="code-by">Code by&nbsp;</span>
            <span className="name">Mahesh Mule</span>
          </button>
        </div>
        <div className="socials flex gap-5">
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea="global"
            range={50}
          >
            <a
              href="https://github.com/mxmule"
              className="w-10 h-10 flex justify-center items-center"
              target="_blank"
            >
              <Magnetic
                intensity={0.1}
                springOptions={springOptions}
                actionArea="global"
                range={50}
              >
                <img src={github} alt="git" />
              </Magnetic>
            </a>
          </Magnetic>
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea="global"
            range={50}
          >
            <a
              href="https://www.linkedin.com/in/mahesh-mule/"
              className="w-10 h-10 flex justify-center items-center"
              target="_blank"
            >
              <Magnetic
                intensity={0.1}
                springOptions={springOptions}
                actionArea="global"
                range={50}
              >
                <img src={linkedin} alt="git" />
              </Magnetic>
            </a>
          </Magnetic>
        </div>
      </div>
      <div className="banner text-center h-screen flex flex-col justify-center items-center">
        <h1 className="big-text text-white whitespace-nowrap">
          <span>
            Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule
            — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh
            Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule —
            Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule
            — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh
            Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule — Mahesh Mule —
            Mahesh Mule
          </span>
        </h1>
        <div className="overlay absolute bg-text flex top-2/3">
          <p className="text-white text-2xl text-left me-10">
            Located <br />
            in the
            <br /> India
          </p>
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
        </div>
        <div className="skill text-left absolute right-20 top-2/3">
          <span className="text-white text-4xl leading-snug text-left mb-5 block">
            &#129126;
          </span>
          <p className="text-white text-4xl leading-snug text-left">
            ReactJS & NextJS <br />
            Developer <br />
          </p>
        </div>
        <img src={banner} alt="banner" className="main-img mx-auto mt-auto" />
      </div>
    </BannerStyle>
  );
};
