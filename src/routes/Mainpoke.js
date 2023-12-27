import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Mainpoke = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

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

  useEffect(() => {
    const pokeFun = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoading(false);
    };
    pokeFun();
  }, [url]);

  function sortData(type) {
    if (type === "ascending") {
      setPokeData(
        [...pokeData].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          } else if (a.name === b.name) {
            return 1;
          } else {
            return -1;
          }
        })
      );
    } else if (type === "descending") {
      setPokeData(
        [...pokeData].sort((a, b) => {
          if (b.name > a.name) {
            return 1;
          } else if (a.name === b.name) {
            return 1;
          } else {
            return -1;
          }
        })
      );
    }
  }

  const handleChange = (event) => {
    sortData(event.target.value);
  };

  return (
    <div className="bg-[#F3C100] font-inter pb-[40px]">
      <div class="flex justify-between mx-[60px] mb-[24px]">
        <div></div>
        <select
          className="border-2  rounded-xl p-[4px] w-[200px] mt-[80px] px-[8px]"
          onChange={handleChange}
        >
          <option value="">Sort</option>
          <option value="ascending">A - Z</option>
          <option value="descending">Z - A</option>
        </select>
      </div>
      <div className="bg-[#F4F4F4] rounded-2xl mx-[60px] mt-[10px] py-[40px]">
        <div className="grid xl:grid-cols-4 md:grid-cols-2  px-[40px]">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            pokeData.map((item) => {
              return (
                <>
                  <Link to={`pokeinfo/${item.id}`}>
                    <div
                      className="m-[8px] grid justify-center border-2 rounded-xl py-[8px] shadow-md bg-white"
                      key={item.id}
                    >
                      <p className="text-left">#{item.id}</p>
                      <img
                        className="w-auto h-[150px]"
                        src={item.sprites.front_default}
                        alt=""
                      />
                      <h2 className="text-center">{item.name}</h2>
                    </div>
                  </Link>
                </>
              );
            })
          )}
        </div>

        <div className="flex justify-end mx-[60px] mt-[40px]">
          {prevUrl && (
            <button
              className="bg-[#ED1B24] text-white px-[24px] py-[12px] rounded-xl h-auto w-[110px] text-center"
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
          )}

          {nextUrl && (
            <button
              className="bg-[#ED1B24] text-white px-[24px] py-[12px] rounded-xl h-auto w-[110px] ml-[8px]"
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mainpoke;
