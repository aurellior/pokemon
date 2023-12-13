import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TreeBackground from "../assets/tree-background.png";
import Tree from "../assets/tree.png";
import Eclipse from "../assets/eclipse.png";
import LogoHero from "../assets/logo-hero.png";
import Pikachu from "../assets/pikachu.png";

const Home = () => {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          className="bg-gradient-to-t from-[#FFCB05] to-[#F2CE43] bg-cover"
        />
        <ParallaxLayer offset={0} speed={1}>
          <img src={TreeBackground}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.2}>
          <img src={Tree}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="flex items-center justify-center">
            <img src={LogoHero} className="mt-[200px] h-[475px] w-auto "></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.3}>
          <img src={Eclipse} className="mt-[800px]"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1.3}>
          <div className="flex items-center justify-center">
            <img
              src={Pikachu}
              className="mt-[230px] ml-[600px] h-[670px] w-auto "
            ></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={1} className="bg-[#F3C100]" />
      </Parallax>
    </div>
  );
};

export default Home;
