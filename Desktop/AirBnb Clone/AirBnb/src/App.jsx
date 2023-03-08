import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from './data.js'
import './App.css'
function App() {
  const [count, setCount] = useState(0);
  const CardData = data.map(unity =>{
    return <Card count = {unity.openSpots}key={unity.id}photo={unity.coverImg} rating={unity.rating} reviewCount={unity.reviewCount} country={unity.location} title={unity.title} price={unity.price} />
  })
  const CardData2 = data.map(unity =>{
    return <Card count = {unity.openSpots} key={unity.id} photo={unity.coverImg} rating={unity.rating} reviewCount={unity.reviewCount} country={unity.location} title={unity.title} price={unity.price} />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="CardData">
      {CardData}
      {CardData2}
      </div>
      
    </div>
  );
}

export default App;
