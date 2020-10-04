import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import History from './Components/History/History'
import Search from './Components/Search/Search'
import AddRHIMSitems from './Components/AddRHIMSitems/AddRHIMSitems'
import AddMedicosItems from './Components/AddMedicosItems/AddMedicosItems'
import Navbar from './Containers/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/history" component={History} />
        <Route path="/search" component={Search} />
        <Route path="/addrhimsitems" component={AddRHIMSitems} />
        <Route path="/addmedicositems" component={AddMedicosItems} />
      </HashRouter>
    </div>
  );
}

export default App;
