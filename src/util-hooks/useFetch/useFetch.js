//utils
import { useState, useEffect } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  const { url } = options;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
  };
};