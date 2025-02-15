import styled from "styled-components";

export const BannerStyle = styled.div`
  height: 100vh;
  background-color: #999d9e;
  color: white;
  text-align: center;
  overflow: hidden;
  position: relative;

  @keyframes bigText {
    0% {
      transform: translateX(0%);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  .big-text {
    font-size: 14rem;
    line-height: 1;
    position: absolute;
    bottom: 60vh;
    white-space: nowrap;
    overflow: hidden;
  }

  .big-text span {
    display: inline-block;
    animation: bigText 300s infinite linear;
  }

  .main-img {
    position: absolute;
    bottom: 0;
    z-index: 1;
    max-width: 55vh;
  }

  @keyframes digitalball {
    0% {
      background: var(--color-blue);
    }
    50% {
      background: #ff4444;
    }
    100% {
      background: var(--color-blue);
    }
  }

  .digital-ball {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background: #999d9e;
    transform: translate(0, 3px);
  }

  .digital-ball .overlay {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    animation: digitalball 6s ease-in-out infinite;
  }

  .line-globe .digital-ball:hover .overlay {
    opacity: 1;
  }

  @keyframes globeBounce {
    0% {
      transform: translate(-50%, -40%);
    }
    50% {
      transform: translate(-50%, -60%);
    }
    100% {
      transform: translate(-50%, -40%);
    }
  }

  .globe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3em;
    height: 3em;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    overflow: hidden;
    will-change: transform;
  }

  @keyframes globe {
    0% {
      transform: translate(-50%, -50%) rotate(15deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(-15deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(15deg);
    }
  }

  .globe-wrap {
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    display: block;
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(30deg);
    animation: globe 5.4s cubic-bezier(0.35, 0, 0.65, 1) infinite;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 0.125em white;
  }

  .globe .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: inset 0.1em 0px 0px 0.08em white;
    animation: circle1 2.7s linear infinite;
    font-size: 0.75em;
  }

  @keyframes circle1 {
    0% {
      border-radius: 50%;
      box-shadow: inset 0.1em 0px 0px 0.08em white;
      width: 100%;
    }
    49% {
      border-radius: 50%;
      box-shadow: inset 0.1em 0px 0px 0.08em white;
      background: transparent;
    }
    50% {
      border-radius: 0%;
      width: 0.175em;
      background: white;
    }
    51% {
      border-radius: 50%;
      box-shadow: inset -0.1em 0px 0px 0.08em white;
      background: transparent;
    }
    100% {
      border-radius: 50%;
      box-shadow: inset -0.1em 0px 0px 0.08em white;
      width: 100%;
    }
  }

  .globe :nth-child(1) {
    animation-delay: -1.8s;
  }

  .globe :nth-child(2) {
    animation-delay: -0.9s;
  }

  .globe .circle-hor {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    height: 55%;
    box-shadow: inset 0px 0px 0px 0.15em white;
    font-size: 0.75em;
  }

  .globe .circle-hor-middle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    transform: translate(-50%, -50%);
    border-radius: 0%;
    height: 0.15em;
    background: white;
    font-size: 0.75em;
  }

  @media screen and (max-width: 1000px) {
    .digital-ball {
      transform: translate(-20%, -50%);
    }
  }

  .overlay {
    left: 0;
    min-width: 300px;
    min-height: 150px;
    padding: 25px 25px 25px 100px;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }

  .skill {
    margin-top: -55px;
  }

  .name-btn {
    width: 175px;

    .code-by {
      transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
    }

    .name {
      transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
    }

    &:hover {
      .code-by {
        transform: translateX(-84px);
        transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
      }

      .name {
        transform: translateX(-84px);
        transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
      }
    }
  }
`;
