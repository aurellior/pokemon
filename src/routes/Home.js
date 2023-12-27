import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TreeBackground from "../assets/tree-background.webp";
import Tree from "../assets/tree.webp";
import Eclipse from "../assets/eclipse.webp";
import LogoHero from "../assets/logo-hero.webp";
import Pikachu from "../assets/pikachu.webp";
import TopDesc from "../assets/top-desc.webp";
import BottomDesc from "../assets/bottom-desc.webp";
import BackgroundDesc from "../assets/background-desc3.webp";
import News1 from "../assets/news1.png";
import News2 from "../assets/news2.png";
import News3 from "../assets/news3.png";
import News4 from "../assets/news4.png";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const getPokemon = async (response) => {
    response.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useState(() => {
    const pokeFun = async () => {
      setLoading(true);
      const res = await axios.get(url);
      getPokemon(res.data.results);
      setLoading(false);
    };
    pokeFun();
  }, [url]);

  return (
    <div>
      <Parallax pages={2.3}>
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
        <div className="bg-[#3F5790] w-full h-full"></div>
        <ParallaxLayer offset={0} speed={1} className="">
          <div
            className="2xl:mt-[1560px] xl:mt-[1500px] lg:mt-[1300px]"
            id="news"
          ></div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 2xl:mt-[1950px] xl:mt-[1650px] lg:mt-[1500px] md:mt-[1300px] sm:mt-[1200px] mt-[600px] mx-[60px] font-inter">
            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white mr-[8px] my-[8px]">
              <img class="w-full" src={News1} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Watch Pokemon Animation Together
                </div>
                <p class="text-gray-700 text-base">
                  If you’re looking for animated Pokémon adventures this holiday
                  season, we’ll help you find something cool to watch.
                </p>
              </div>
            </div>

            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white mx-[8px] my-[8px]">
              <img class="w-full" src={News2} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  A Primal-Yet-Playful Year for Pokemon G
                </div>
                <p class="text-gray-700 text-base">
                  From Paldean Pokémon and Party Play to the crowning of a
                  second Pokémon GO World Champion!
                </p>
              </div>
            </div>

            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white mx-[8px] my-[8px]">
              <img class="w-full" src={News3} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Meet That Artist Made Their Pokemon TCG Debut in 2023
                </div>
                <p class="text-gray-700 text-base">
                  Meet some of the artists who made a powerful first impression
                  with their Pokémon TCG cards in 2023.
                </p>
              </div>
            </div>

            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white ml-[8px] my-[8px]">
              <img class="w-full" src={News4} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  Party with Psyduck and Shiny Vanillite in Pokemon GOt
                </div>
                <p class="text-gray-700 text-base">
                  Shiny Vanillite debuts, event bonuses abound, and several
                  Pokémon wear their holiday finest.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1} id="featured">
          <div className=" bg-white xl:h-[500px] lg:h-[700px] md:h-[1200px] xl:mt-[2500px] rounded-t-3xl p-[60px]">
            <h1 className="mx-[8px] font-semibold text-[24px]">
              Featured Pokemon
            </h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2  my-[40px]">
              {loading ? (
                <h1>Loading...</h1>
              ) : (
                pokeData.map((item) =>
                  item.id <= 4 ? (
                    <Link to={`mainpoke/pokeinfo/${item.id}`} key={item.id}>
                      <div className="m-[8px] grid justify-center border-2 rounded-xl py-[8px] shadow-md bg-white">
                        <p className="text-left">#{item.id}</p>
                        <img
                          className="w-auto h-[150px]"
                          src={item.sprites.front_default}
                          alt=""
                        />
                        <h2 className="text-center">{item.name}</h2>
                      </div>
                    </Link>
                  ) : null
                )
              )}
            </div>
            <div className="flex justify-between mx-[8px]">
              <div></div>
              <Link to="/mainpoke">
                <button className="bg-[#ED1B24] text-white px-[24px] py-[12px] rounded-xl h-auto w-[250px] ml-[8px]">
                  Explore More Pokemon
                </button>
              </Link>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={1}>
          <footer className="xl:mt-[3000px] lg:mt-[3000px] mt-[3490px]">
            <div className="flex justify-center w-full h-[60px] items-center bg-[#3F5790] text-white mb-auto ">
              Pokemon Website Aurellio
            </div>
          </footer>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
