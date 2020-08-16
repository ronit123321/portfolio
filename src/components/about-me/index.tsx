import * as React from "react";
import { AboutMeWrapper } from "../styled/about-me.styled";
import * as Chance from "chance";
import { DragItem } from "../drag-item";

type HeaderNavBarProps = {
  yAxis: number;
  headerRef: React.MutableRefObject<any>;
};

export const AboutMe: React.FC<HeaderNavBarProps> = ({ yAxis, headerRef }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const [currentX, setCurrentX] = React.useState(0);

  React.useEffect(() => {
    if (yAxis > 180 && !isCollapsed) {
      setIsCollapsed(true);
    }
    if (yAxis === 0 && isCollapsed) {
      setIsCollapsed(false);
    }
  }, [yAxis]);

  const getLeftStyle = () => {
    const Nlimit = -400;
    const Plimit = 400;
    if (currentX <= Nlimit) {
      return `calc( 48% + ${Nlimit}px )`;
    } else {
      if (currentX >= Plimit) {
        return `calc( 48% + ${Plimit}px )`;
      } else {
        return `calc( 48% + ${currentX}px )`;
      }
    }
  };

  const getRightStyle = () => {
    const Nlimit = -400;
    const Plimit = 400;

    if (currentX >= Plimit) {
      console.log(`calc( 48% - ${currentX}px )`);
      return `calc( 48% - ${Plimit}px )`;
    } else {
      if (currentX <= Nlimit) {
        return `calc( 48% - ${Nlimit}px )`;
      }
      return `calc( 48% - ${currentX}px )`;
    }
  };

  return (
    <AboutMeWrapper className={isCollapsed ? "collapsed" : ""}>
      <div
        style={{
          width: getLeftStyle(),
        }}
        className="leftPanel"
      >
        Some Info
      </div>

      <DragItem
        id="drag"
        onDrag={(deltaX: number, _deltaY: number, _initial: void) => {
          setCurrentX(deltaX);
        }}
        onDragStart={() => {}}
        onDragStop={() => {}}
      >
        <div className="dragline"></div>
      </DragItem>

      <div
        style={{
          width: getRightStyle(),
        }}
        className="rightPanel"
      >
        <div id="imageBackground" />
      </div>
    </AboutMeWrapper>
  );
};
