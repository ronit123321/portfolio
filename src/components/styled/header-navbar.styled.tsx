import styled from "styled-components";

export const HeaderNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  transition: all 1s linear;
  &.unset {
    justify-content: center;
  }
  &.collapsed {
    width: 100%;
  }
`;

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
