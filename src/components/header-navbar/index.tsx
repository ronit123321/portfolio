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
  yAxis: number;
};

export const HeaderNavBar: React.FC<HeaderNavBarProps> = ({ yAxis }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  React.useEffect(() => {
    if (yAxis > 480 && !isCollapsed) {
      setIsCollapsed(true);
    }
    if (yAxis === 0 && isCollapsed) {
      setIsCollapsed(false);
    }
  }, [yAxis]);

  const getLinearGradient = () => {
    // translucent
    if (yAxis < 760 && !isCollapsed) {
      return "linear-gradient(0deg, rgb(76 79 90 / 53%) 4.26%, rgb(32 33 37 / 62%) 84.84%)";
    } else if (yAxis < 750 && isCollapsed) {
      return `linear-gradient(-${getGradient(
        yAxis
      )}deg, rgb(76 79 90 / 53%) 4.26%, rgb(32 33 37 / 62%) 84.84%)`;
    } else {
      //opaque
      return `linear-gradient(-${getGradient(
        yAxis
      )}deg, #4c4f5a 4.26%,#202125 84.84%)`;
    }
  };

  const getGradient = (y: number) => {
    if (y < 400) 60;
    return y;
  };

  const getPadding = () => {
    if (isCollapsed) return "30px 30px 20px 30px";
    else return `${getTopBottomPadding(yAxis)}px 30px 20px 30px`;
  };

  const getTopBottomPadding = (y: number) => {
    const newValue = 800 - y;
    return newValue;
  };

  const getTitle = () => {
    if (isCollapsed)
      return (
        <div className="tagTitle">
          <p className="logoHighlight">{"<"} </p>
          <p>Ronit</p>
          <p className="logoHighlight">{"/>"}</p>
        </div>
      );
    else return "Ronit Oommen";
  };

  return (
    <HeaderNavWrapper
      className={isCollapsed ? "collapsed" : "unset"}
      style={{
        backgroundImage: getLinearGradient(),
        padding: getPadding(),
      }}
      id="head-navbar-wrapper"
    >
      <HeaderNavTitleWrapper>
        <HeaderNavTitle
          className={isCollapsed ? "collapsed" : ""}
          id="head-navbar-wrapper-title"
        >
          {getTitle()}
        </HeaderNavTitle>
        {!isCollapsed && (
          <HeaderNavTitleInfo id="head-navbar-wrapper-title">
            Web Engineer
          </HeaderNavTitleInfo>
        )}
      </HeaderNavTitleWrapper>
      {isCollapsed && (
        <HeaderNavOtherLinks id="head-navbar-wrapper-other-links">
          <HeaderNavLink id="head-navbar-wrapper-link-1">
            <a href={"https://github.com/ronit123321"} target="_blank">
              Github
            </a>
          </HeaderNavLink>
          <HeaderNavLink id="head-navbar-wrapper-link-2">
            <a
              href={"https://www.linkedin.com/in/ronit-oommen-584596102/"}
              target="_blank"
            >
              LinkedIn
            </a>
          </HeaderNavLink>
          <HeaderNavLink id="head-navbar-wrapper-link-3">
            <a href="mailto:ronit.oommen@gmail.com">Email Me</a>
          </HeaderNavLink>
        </HeaderNavOtherLinks>
      )}
    </HeaderNavWrapper>
  );
};
