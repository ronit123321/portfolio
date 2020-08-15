import * as React from "react";
import {
  HeaderNavWrapper,
  HeaderNavTitle,
  HeaderNavTitleWrapper,
  HeaderNavOtherLinks,
  HeaderNavLink,
  HeaderNavTitleInfo,
} from "../styled/header-navbar.styled";

type HeaderNavBarProps = {
  isCollapsed?: boolean;
};

export const HeaderNavBar: React.FC<HeaderNavBarProps> = ({ isCollapsed }) => {
  return (
    <HeaderNavWrapper id="head-navbar-wrapper">
      <HeaderNavTitleWrapper>
        <HeaderNavTitle id="head-navbar-wrapper-title">
          Ronit Oommen
        </HeaderNavTitle>
        {!isCollapsed && (
          <HeaderNavTitleInfo id="head-navbar-wrapper-title">
            Web Engineer
          </HeaderNavTitleInfo>
        )}
      </HeaderNavTitleWrapper>
      {isCollapsed && (
        <HeaderNavOtherLinks id="head-navbar-wrapper-other-links">
          <HeaderNavLink id="head-navbar-wrapper-link-1">1</HeaderNavLink>
          <HeaderNavLink id="head-navbar-wrapper-link-2">2</HeaderNavLink>
          <HeaderNavLink id="head-navbar-wrapper-link-3">3</HeaderNavLink>
        </HeaderNavOtherLinks>
      )}
    </HeaderNavWrapper>
  );
};
