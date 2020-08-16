import * as React from "react";
import { AboutMeWrapper } from "../styled/about-me.styled";
import * as Chance from "chance";

type HeaderNavBarProps = {
  yAxis: number;
  headerRef: React.MutableRefObject<any>;
};

export const AboutMe: React.FC<HeaderNavBarProps> = ({ yAxis, headerRef }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  React.useEffect(() => {
    // if (yAxis > 180) {
    //   setIsCollapsed(true);
    // }
    // if (yAxis < 180 && isCollapsed) {
    //   setTimeout(() => {
    //     setIsCollapsed(false);
    //   }, 100);
    // }
  }, [yAxis]);

  return (
    <AboutMeWrapper className={isCollapsed ? "collapsed" : ""}>
      <div className="one">
        <img src={"https://cutecatsanddogs.com/wp-content/uploads/2014/10/funny-videos-funny-cats-funny-ca1.jpg"} />
      </div>
      <div className="two">
        <img src={"https://i.redd.it/g3q78obsja121.jpg"} />
      </div>

      <div className="three">
        <img src={"https://cat-world.com/wp-content/uploads/2017/03/domestic-shorthair30.jpg"} />
      </div>

      <div className="two">
        <img src={"https://townsquare.media/site/675/files/2019/08/67661039_2600194060216546_4230772670389551104_n-e1565265186272.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"} />
      </div>
      <div className="one">
        <img src={"https://i1.wp.com/blackpinkupdate.com/wp-content/uploads/2020/01/3-BLACKPINK-Lisa-Cats-Luca-Baby-Sitting-Lily-Playing-Tissue-Paper.jpg?resize=576%2C1024&ssl=1"} />
      </div>
    </AboutMeWrapper>
  );
};
