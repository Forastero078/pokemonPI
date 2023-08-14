import styles from './NavBar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavBar(){




    return(
        <div className={styles.sideNavBar}>

            <div className={styles.links}>

            <NavLink to='/home' className={({isActive}) => isActive ? styles.active : styles.link}> ⌂ <span className={styles.text}>Home</span> </NavLink>
            <br/>
            <hr/>
            <NavLink to='/myPokemons' className={({isActive}) => isActive ? styles.active : styles.link}> ❤ <span className={styles.text}>myPokemóns</span> </NavLink>
            <br/>
            <hr/>
            <NavLink to='/create' className={({isActive}) => isActive ? styles.active : styles.link}> ✗ <span className={styles.text}>Crear mi Pokemón!</span> </NavLink>
            <br/>
            <hr/>
            <NavLink to='/about' className={({isActive}) => isActive ? styles.active : styles.link}> ➔ <span className={styles.text}>About</span> </NavLink>

            <br/>
            <hr/>
            <NavLink to='/contact' className={({isActive}) => isActive ? styles.active : styles.link}> ☏ <span className={styles.text}>Contact</span> </NavLink>

            <br/>
            <hr/>
            </div>

        </div>
    )
}