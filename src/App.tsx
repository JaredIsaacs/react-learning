import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

interface Game {
  title: string;
  normalPrice: string;
  salePrice: string;
  steamAppID: string;
}

function App() {
  // https://apidocs.cheapshark.com/ https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=9
  // https://api-docs.igdb.com/#getting-started
  const [data, setData] = useState(Array<Game>);

  useEffect(() => {
    axios
      .get(
        "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=54"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
  if (data.length > 0) {
    console.log(data);
    return (
      <>
        {data.map((d) => {
          return (
            <Card
              key={d.title}
              title={d.title}
              normalPrice={d.normalPrice}
              salePrice={d.salePrice}
              image={
                "https://cdn.cloudflare.steamstatic.com/steam/apps/" +
                d.steamAppID +
                "/header.jpg"
              }
              link={"https://store.steampowered.com/app/" + d.steamAppID}
            />
          );
        })}
      </>
    );
  }
  

  return <div>Something went wrong!</div>;
}

export default App;
