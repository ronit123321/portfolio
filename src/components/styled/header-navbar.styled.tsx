import styled from "styled-components";

export const HeaderNavWrapper = styled.div<{ yAxis: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(
    -60deg,
    rgb(49 24 250 / 30%),
    rgb(205 200 251 / 60%)
  );
  color: white;
  transition: all 0.5s linear-out;
  &.unset {
    padding: ${(props) =>
      `${getTopBottomPadding(props.yAxis)}px 30px 20px 30px`};
    justify-content: center;
  }
  &.collapsed {
    position: fixed;
    top: 0;
    width: 100%;
    background-image: ${(props) =>
      `linear-gradient(-${getGradient(
        props.yAxis
      )}deg, rgb(49 24 250 / 30%),
    rgb(205 200 251 / 60%))`};
    padding: 30px 30px 20px 30px;
  }
`;

const getGradient = (y: number) => {
  if (y < 400) 60;
  return y;
};

const getTopBottomPadding = (y: number) => {
  const newValue = 400 - y;
  return newValue;
};

export const HeaderNavTitleWrapper = styled.div`
  display: flex;
  text-align: center;
  transition: all 0.5s linear;
`;

export const HeaderNavTitle = styled.div`
  font-size: 48px;
  transition: all 0.5s linear;
  text-align: center;
  &.collapsed {
    text-align: left;
  }
`;

export const HeaderNavTitleInfo = styled.div`
  font-size: 24px;
  transition: all 0.5s linear;
`;

export const HeaderNavOtherLinks = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.5s linear;
  margin-right: 16px;
  margin-top: 16px;
`;

export const HeaderNavLink = styled.div`
  min-width: 100px;
  transition: all 0.5s linear;
  display: flex;
  a {
    cursor: pointer;
    text-decoration: none;
    outline: none;
    color: white;
    &:active {
      outline: none;
      color: white;
    }
    &:focus {
      outline: none;
      color: white;
    }
    :visited {
      outline: none;
      color: white;
    }
  }
`;
