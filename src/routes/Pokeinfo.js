import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

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
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        detailData.forms.map((item) => {
          return (
            <div>
              <h1>{item.name}</h1>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt=""
              />
              <div className="abilities">
                {detailData.abilities.map((poke) => {
                  return (
                    <>
                      <div className="group">
                        <h2>{poke.ability.name}</h2>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="base-stat">
                {detailData.stats.map((poke) => {
                  return (
                    <>
                      <h3>
                        {poke.stat.name}:{poke.base_stat}
                      </h3>
                    </>
                  );
                })}
              </div>
            </div>
          );
        })
      )}
    </>
  );
}

export default Pokeinfo;
