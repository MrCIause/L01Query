import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Games() {
  useEffect(() => {
    getData();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [gameArr, setGameArr] = useState([]);

  const handleInputChange = (event) => {
    const year = event.target.value;
    setSearchParams({ search: year });
  };

  const getData = async () => {
    try {
      const response = await fetch("http://fs1.co.il/bus/xbox1.php");
      const data = await response.json();
      console.log(data);
      setGameArr(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(searchParams.get("search"));

  return (
    <div>
      <h3>input wanted year:</h3>
      <input type="number" onChange={handleInputChange}></input>
      <h2>GameList by year:</h2>
      <div className="row">
        {gameArr.map((game) => {
          if (
            searchParams.get("search") == game.Year ||
            searchParams.get("search") === ""
          ) {
            return (
              <article className="border p-2 col-md-4" key={game.Game}>
                <h3>{game.Game}</h3>
                <p>Year: {game.Year}</p>
                <p>Genre: {game.Genre}</p>
                <p>Platform: {game.Platform}</p>
                <p>
                  WikiLink: <a href={game.GameLink}>Click me</a>
                </p>
              </article>
            );
          }
        })}
      </div>
    </div>
  );
}
