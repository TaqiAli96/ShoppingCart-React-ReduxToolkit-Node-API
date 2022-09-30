import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(url);
        setData(response.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return [data];
};

export default useFetch;
