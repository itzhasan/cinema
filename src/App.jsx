import MainHeader from "./components/header/header";
import Main from "./components/body/mainbody";
import { useEffect, useState } from "react";
import "./App.css"
import List from "./components/film_list/List";
const App = () => {
 
//   if(loading) return <p>Loading...</p>

  return (
    <div className="containermain">
      <MainHeader/>
      <List/>
    </div>
  );
};


export default App;
