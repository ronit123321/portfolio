import * as React from "react";
import { navigate } from "gatsby";
import { AppWrapper } from "../components/styled/homepage.styled";
import { HeaderNavBar } from "../components/header-navbar";
import { AboutMe } from "../components/about-me";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const PositionStore = () => {
  const [renderCount, triggerReRender] = React.useState(0);
  const elementPosition = React.useRef({ x: 10, y: 150 });
  const viewportPosition = React.useRef({ x: 0, y: 0 });
  let throttleTimeout = null;

  const getPos = (el, axis) => Math.round(el.current[axis]);

  const setPos = (el, pos) => {
    el.current = pos;
    if (throttleTimeout !== null) return;
    // Only re-render the component every 0.1s
    throttleTimeout = setTimeout(() => triggerReRender(renderCount + 1), 300);
  };

  return {
    getElementX: () => getPos(elementPosition, "x"),
    getElementY: () => getPos(elementPosition, "y"),
    getViewportX: () => getPos(viewportPosition, "x"),
    getViewportY: () => getPos(viewportPosition, "y"),
    setElementPosition: (pos) => setPos(elementPosition, pos),
    setViewportPosition: (pos) => setPos(viewportPosition, pos),
    renderCount,
  };
};

const Home: React.FC<any> = () => {
  const positionsStore = PositionStore();
  const viewportRef: any = React.useRef();

  const [yPosition, setYposition] = React.useState<number>(0);

  // Viewport scroll position
  useScrollPosition(
    ({ currPos }) => {
      setYposition(currPos.y);
    },
    [positionsStore],
    null,
    true
  );

  return (
    <AppWrapper>
      <div
        style={{
          backgroundImage: `url(https://svgur.com/i/CPw.svg)`,
          backgroundSize: "initial",
          backgroundRepeat: "no-repeat",
        }}
        ref={viewportRef}
      >
        <HeaderNavBar yAxis={yPosition} />
      </div>
      <AboutMe />
    </AppWrapper>
  );
};

export default Home;
