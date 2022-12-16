import { useState, useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  const [apidata, setnewst] = useState({});
  const getApidata = async () => {
    const response = await fetch(
      // "https://api.themoviedb.org/3/search/movie?api_key=1c4e3d3e8632742c1c8bc423e914c565&query=avatar"
      "https://api.themoviedb.org/3/movie/popular?api_key=1c4e3d3e8632742c1c8bc423e914c565&language=en-US&page=1"
    );
    const data = await response.json();
    setnewst({ data });
  };
  useEffect(() => {
    getApidata();
  }, []);
  return (
    <>
      <Header />
      <Hero data={apidata} />
    </>
  );
}

export default App;
