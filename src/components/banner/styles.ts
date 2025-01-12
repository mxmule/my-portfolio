import styled from "styled-components";

export const BannerStyle = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 100vh;
  background-color: #999d9e;
  color: white;
  text-align: center;
  overflow: hidden;

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
    position: relative;
    top: 20vh;
    white-space: nowrap;
    overflow: hidden;

  }

  .big-text span {
    display: inline-block;
    animation: bigText 60s infinite linear;
  }

  .main-img {
    position: relative;
    z-index: 1;
    max-width: 500px;
  }
`;
