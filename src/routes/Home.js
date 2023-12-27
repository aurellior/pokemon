import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TreeBackground from "../assets/tree-background.webp";
import Tree from "../assets/tree.webp";
import Eclipse from "../assets/eclipse.webp";
import LogoHero from "../assets/logo-hero.webp";
import Pikachu from "../assets/pikachu.webp";
import TopDesc from "../assets/top-desc.webp";
import BottomDesc from "../assets/bottom-desc.webp";
import BackgroundDesc from "../assets/background-desc3.webp";

const Home = () => {
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={1} factor={2}>
          <div className="bg-gradient-to-t from-[#FFCB05] to-[#F2CE43] bg-cover md:h-[800px] h-[300px]"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <img src={TreeBackground} className="md:mt-[0px] mt-[10px]"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <img src={Tree}></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <div className="flex items-center justify-center">
            <img
              src={LogoHero}
              className="mt-[60px] 2xl:mt-[190px] 2xl:w-[1288px]  xl:mt-[150px] xl:w-[1082px]  lg:mt-[120px] lg:w-[902px] md:w-[680px] md:mt-[110px] sm:w-[568px] w-[350px] h-auto"
            ></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1.2}
          className="2xl:mt-[1100px] xl:mt-[900px] lg:mt-[750px] md:mt-[640px] sm:mt-[480px] mt-[300px]"
        >
          <img src={BackgroundDesc} className="w-full"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <img
            src={Eclipse}
            className="2xl:mt-[800px] xl:mt-[590px] lg:mt-[500px] md:mt-[450px] sm:mt-[300px] mt-[220px]"
          ></img>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div className="flex items-center justify-center">
            <img
              src={Pikachu}
              className=" 2xl:ml-[600px] 2xl:h-[670px] 2xl:mt-[200px] xl:mt-[80px] xl:h-[600px] xl:ml-[600px] lg:mt-[70px] lg:h-[550px] lg:ml-[500px] md:h-[400px] md:mt-[100px] md:ml-[400px] sm:h-[300px] sm:mt-[60px] sm:ml-[300px] h-[200px] mt-[50px] ml-[150px] w-auto "
            ></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <div className="bg-[#F3C100] 2xl:h-[100px] 2xl:mt-[910px] xl:mt-[800px] lg:mt-[600px] md:mt-[500px] sm:mt-[370px] sm:h-[100px] mt-[250px] h-[50px]"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          className="2xl:mt-[1100px] xl:mt-[850px] lg:mt-[700px] md:mt-[600px] sm:mt-[460px] mt-[290px]"
        >
          <img src={TopDesc}></img>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          className="2xl:mt-[1300px] xl:mt-[1050px] lg:mt-[900px] md:mt-[750px] sm:mt-[580px] mt-[340px]"
        >
          <h1 className="text-[#3F5790] font-extrabold sm:text-[60px] md:text-[80px] text-[28px] flex justify-center items-center">
            Gotta Catch 'Em All
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          className="2xl:mt-[1500px] xl:mt-[1250px] lg:mt-[1100px] md:mt-[950px] sm:mt-[730px] mt-[420px]"
        >
          <img src={BottomDesc}></img>
        </ParallaxLayer>
        <div className="bg-[#3F5790] w-full h-full">
          <h1>HALO INI TEST</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default Home;
