import { useEffect, useState } from "react";
import { VITE_GIPHY_API } from "../env/variables";

const APIKEY = VITE_GIPHY_API;

interface KeywordProps {
  keyword: string;
}

const useFetch = ({ keyword }: KeywordProps) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Ubb0aGPkGFJOHJbbx4BBcBs71AkHOXzJ&q=${keyword.split(" ").join("")}&limit=1`);
      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
