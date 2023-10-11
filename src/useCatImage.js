import { useState, useEffect } from "react";

export default function useCatImage(){
    
    const [myData, setMyData] = useState();
  // asybnc/axait permet de gérer le promise(.then() et le .catch ())
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );

      const data = await response.json()
        console.log(data);
      setMyData(data[0].url)
    };

    fetchData();
  }, []);

  return myData;
}