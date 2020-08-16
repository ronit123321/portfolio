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
      <p>Some example text..</p>
      <h2>Scroll back up again to "remove" the sticky position.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
        Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
        sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
        sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
        tellus gravida venenatis. Integer fringilla congue eros non fermentum.
        Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
        diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio,
        vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
        ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum
        augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis
        in odio. Praesent convallis urna a lacus interdum ut hendrerit risus
        congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
        In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae
        dui eget tellus gravida venenatis. Integer fringilla congue eros non
        fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus.
        Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi
        lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.
        Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce
        luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed
        ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut
        hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum
        dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare
        turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla
        congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras
        ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
        interdum, nisi lorem egestas odio, vitae scelerisque enim ligula
        venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor
        vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante
        ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis
        urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum
        nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc
        venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus
        gravida venenatis. Integer fringilla congue eros non fermentum. Sed
        dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam
        velit.
      </p>
    </AboutMeWrapper>
  );
};
