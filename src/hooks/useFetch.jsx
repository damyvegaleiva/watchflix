import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL, OPTIONS } from "../config/config";

const useFetch = (APIvalue, dataModifier) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    fetch(BASE_URL + APIvalue, OPTIONS)
      .then((response) => response.json())
      .then((data) => setData(dataModifier(data)))
      .catch((error) => console.log(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, [APIvalue, dataModifier]);

  return { data, isLoading };
};

export default useFetch;
