import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Mainpoke from "./Mainpoke";

function Pokeinfo() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setDetailData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div className="bg-[#F3C100] pt-[100px] w-full pb-[100px]">
      <div>
        <div className="bg-white xl:mx-[300px] md:mx-[200px] sm:mx-[100px] mx-[40px] rounded-xl p-[40px] xl:px-[200px] px-[100px] ">
          <Link to="/mainpoke">
            <button className="border-2 py-[4px] px-[12px] rounded-md bg-[#ED1B24] text-white">
              Back
            </button>
          </Link>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            detailData.forms.map((item) => {
              return (
                <div className="flex  xl:mx-[40px] md:mx-[20px]  flex-col">
                  <h1 className="text-center mb-[40px] text-[40px] font-semibold">
                    {item.name}
                  </h1>
                  <div className="flex xl:flex-row flex-col justify-between">
                    <div>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        alt=""
                        className="w-auto xl:h-[200px] md:h-[150px] mb-[40px]"
                      />
                      <div className="type">
                        {detailData.types.map((poke) => {
                          return (
                            <>
                              <h3 className="text-center text-[24px]">
                                {poke.type.name}
                              </h3>
                            </>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex items-center xl:text-[24px] md:text-[18px] xl:ml-[40px]">
                      <div>
                        <h3>HP</h3>
                        <h3>Attack</h3>
                        <h3>Defence</h3>
                        <h3>Special Attack</h3>
                        <h3>Special Defence</h3>
                        <h3>Speed</h3>
                      </div>
                      <div className="base-stat ml-[24px]">
                        {detailData.stats.map((poke) => {
                          return (
                            <>
                              <h3>{poke.base_stat}</h3>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Pokeinfo;
