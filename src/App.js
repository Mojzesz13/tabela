import React from 'react';
import './App.css';
import './sass/_reset.scss'
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import Table from "./Components/table";

function App() {
  return (
    <>
      <NavBar/>
      <SideBar/>
      <Table/>
      </>
  );
}

export default App;
