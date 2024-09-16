import React, { useEffect, useState } from "react";
import './assets/index.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect( () => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:5000")
        setData(res.data);
        const randomNumber = Math.floor(Math.random() * res.data.length);
        setRandomNumber(randomNumber);
      } catch (err) {
        setError("error: " + err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);


  if(loading) return <p>Loading</p>
  if(error) return (<h2>{error}</h2>)
  
  return (
    <div id="page">
      <Header />
      <Body data={data} randomPlayer={data[randomNumber]} />
      <Footer />
    </div>
  );
}

export default App;