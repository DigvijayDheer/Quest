import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <div>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/history" >History</NavLink>
                <NavLink to="/search" >Search</NavLink>
                <NavLink to="/addrhimsitems" >Add RHIMS Items</NavLink>
                <NavLink to="/addmedicositems" >Add Medicos Items</NavLink>
            </div>
        )
    }
}

export default Navbar
