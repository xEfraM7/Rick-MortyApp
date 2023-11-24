import { useEffect, useState } from "react";
import { RickAndMortyApiResponse } from "../interfaces/interfaces";

export const useFetch = () => {
  const [characterList, setcharacterList] = useState<RickAndMortyApiResponse>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const json = await data.json();
      setcharacterList(json);
    };
    fetchData().catch(console.error);
  }, []);

  const searchPage = (number: number) => {
    const fetchData = async () => {
      const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${number}`);
      const json = await data.json();
      setcharacterList(json)
    };
    fetchData().catch(console.error);
  };

  return {
    characterList,
    searchPage,
  };
};
