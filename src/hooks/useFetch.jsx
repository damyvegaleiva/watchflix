import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, OPTIONS } from "../config/config";

const useFetch = (APIvalue, dataModifier) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const request = await fetch(BASE_URL + APIvalue, OPTIONS);
        const data = await request.json();
        setData(dataModifier(data));
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1250);
      }
    }

    fetchData();
  }, [APIvalue, dataModifier]);

  return { data, isLoading };
};

export default useFetch;
