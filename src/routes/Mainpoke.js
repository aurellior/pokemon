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

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokeData.map((item) => {
          return (
            <>
              <Link to={`pokeinfo/${item.id}`}>
                <div className="card" key={item.id}>
                  <h2>{item.id}</h2>
                  <img src={item.sprites.front_default} alt="" />
                  <h2>{item.name}</h2>
                </div>
              </Link>
            </>
          );
        })
      )}

      <div className="container">
        <div className="left-content">
          <div className="btn-group">
            {prevUrl && (
              <button
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
    </>
  );
};

export default Mainpoke;
