import styled from "styled-components";

export const AboutMeWrapper = styled.div`
  display: flex;
  text-align: center;
  padding: 56px 32px 32px 32px;
  flex-wrap: wrap;
  margin-right: 1em;

  img {
    max-height: 300px;
    border-radius: 20px;
    box-shadow: 0 0px 32px 4px rgb(255 255 255 / 30%);
  }

  div {
    box-sizing: border-box;
    background-color: transparent;
    padding: 0;
    text-align: center;
    margin: 1em;
  }
  .one {
    flex: 1 1 calc(100% / 3 - 2em);
  }

  .two {
    flex: 2 1 calc(100% / 2 - 2em);
  }

  .three {
    flex: 3 1 calc(100% / 3 * 2 - 2em);
  }
`;
