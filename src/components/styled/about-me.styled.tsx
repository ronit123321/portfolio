import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  text-align: center;
  padding: 56px 32px 32px 32px;
  flex-wrap: wrap;
  margin-right: 1em;
  flex-direction: row;
  z-index: 99;

  .leftPanel {
  }

  .rightPanel {
  }

  #drag {
    width: auto;
    background: linear-gradient(
      0deg,
      rgb(130 155 247) 4.26%,
      rgb(0 51 255) 84.84%
    );
    cursor: ew-resize;
    padding: 2px;
  }

  #imageBackground {
    width: 100%;
    height: 85vh;
    background-image: url("https://i.ibb.co/93g8Wxq/image.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: white;
  }
`;
