import styles from './Form.module.css';
import React, { useState } from 'react';
import validate from './validate.js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addMyPokemons } from '../../redux/actions';



export default function Form() {

    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        name: '',
        image: '',
        hp: 0,
        attack: 0,
        defend: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: []
    });

    const [errors, setErrors] = useState({});


    const handlerInputs = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value

        });
        setErrors(validate(inputs));
    };

    const handlerType = (e) => {
        if(typeof inputs.types === 'object' && Array.isArray(inputs.types)){
            setInputs({...inputs,
    types: [...inputs.types, e.target.value]})
            } else {
                setInputs({...inputs,
                    types: [e.target.value]})   
            }

    console.log(inputs.types)
    };

    const handlerSubmit = (e) => {
        e.preventDefault()
        
        if(!(Object.values(errors)).length && inputs.name.length){
        axios.post('http://localhost:3001/pokemons/', {
            name: inputs.name,
            image: inputs.image,
            hp: inputs.hp,
            attack: inputs.attack,
            defend: inputs.defend,
            speed: inputs.speed,
            height: inputs.height,
            weight: inputs.weight,
            pokeTypes: inputs.types
        }).then((response) => {
            console.log(response.data);
            alert( `Tu Pokemón ${response.data.name} ha sido creado con exito`);
            setInputs({
                name: '',
                image: '',
                hp: 0,
                attack: 0,
                defend: 0,
                speed: 0,
                height: 0,
                weight: 0,
                pokeTypes: []
            });
            dispatch(addMyPokemons());

        })
        .catch((error) => {
            console.log({error: error.message});
            alert('Ha ocurrido un error');
            
        })
    } else {
        alert('Hay errores en los campos')
    }
        

    };


    return (
        <div className={styles.divPadre}>



            <h1 className={styles.h1}>Crea tu Pokemón!</h1>







            <form className={styles.form} onSubmit={handlerSubmit}>

                <img className={styles.img} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/357d3914-50a1-459f-9d00-2e6cadcfd4cf/d3inxsc-7872dcb0-d259-44e8-87d3-713a8555afbb.png/v1/fill/w_895,h_893,q_75,strp/bulbasaur_by_yuuk3-d3inxsc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zNTdkMzkxNC01MGExLTQ1OWYtOWQwMC0yZTZjYWRjZmQ0Y2YvZDNpbnhzYy03ODcyZGNiMC1kMjU5LTQ0ZTgtODdkMy03MTNhODU1NWFmYmIucG5nIiwid2lkdGgiOiI8PTg5NSIsImhlaWdodCI6Ijw9ODkzIn1dXX0.uDEZu9ujCg6x9TRGpmdv4jvHOkXZ5PKuUHzreS4gL4g" />


                <div className={`${styles.group}`}>
                    <input type='text' name='name' value={inputs.name} onChange={handlerInputs} placeholder='Nombre del Pokemón' className={styles.field} id='name'/>
                    {errors.name && <span className={styles.warning}>{errors.name}</span>}
                </div>

                <br />
                
                
                <div className={`${styles.group}`}>
                <input type='text' name='image' value={inputs.image} onChange={handlerInputs} placeholder='Imagen' className={styles.field} id='image' />
                {errors.image && <span className={styles.warning}>{errors.image}</span>}
                </div>
                <br />

                <div className={`${styles.group}`}>
                <span className={styles.text}>Vida maxima:   </span>
                <input type='number' name='hp' value={inputs.hp} onChange={handlerInputs}  className={styles.fieldNumber} />
                {errors.hp && <span className={styles.warning}>{errors.hp}</span>}
                </div>
                <br />

                <div className={`${styles.group}`}>
                <span className={styles.text}>Ataque:   </span>
                <input type='number' name='attack' value={inputs.attack} onChange={handlerInputs} className={styles.fieldNumber} />
                {errors.attack && <span className={styles.warning}>{errors.attack}</span>}
                </div>
                
                <br />
                <div className={`${styles.group}`}>
                <span className={styles.text}>Defensa:</span>
                <input type='number' name='defend' value={inputs.defend} onChange={handlerInputs} className={styles.fieldNumber} />
                {errors.defend && <span className={styles.warning}>{errors.defend}</span>}
                </div>
                <br />

                <div className={`${styles.group}`}>
                <span className={styles.text}>Velocidad:</span>
                <input type='number' name='speed' value={inputs.speed} onChange={handlerInputs} className={styles.fieldNumber} />
                {errors.speed && <span className={styles.warning}>{errors.speed}</span>}
                </div>
                
                <br />

                <div className={`${styles.group}`}>
                <span className={styles.text}>Altura:</span>
                <input type='number' name='height' value={inputs.height} onChange={handlerInputs} className={styles.fieldNumber} />
                {errors.height && <span className={styles.warning}>{errors.height}</span>}
                </div>
                
                <br />

                <div className={`${styles.group}`}>
                <span className={styles.text}>Peso:</span>
                <input type='number' name='weight' value={inputs.weight} onChange={handlerInputs} className={styles.fieldNumber} />
                {errors.weight && <span className={styles.warning}>{errors.weight}</span>}
                </div>
                
                <br />

                <span className={styles.text}>Type 1 del Pokemón:</span>
                <select name='Types de Pokemóns' className={styles.select} onChange={handlerType}>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="bug">Bug</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="ground">Ground</option>
                    <option value="poison">Poison</option>
                    <option value="rock">Rock</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="shadow">Shadow</option>
                    <option value="normal">Normal</option>
                </select>
                <br />

                <span className={styles.text}>Type 2 del Pokemón:</span>
                <select name='Types de Pokemóns' className={styles.select} onChange={handlerType}>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="bug">Bug</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="ground">Ground</option>
                    <option value="poison">Poison</option>
                    <option value="rock">Rock</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="shadow">Shadow</option>
                    <option value="normal">Normal</option>
                </select>
                <br />

                <button className={styles.button} type='submit'>¡CREAR POKEMÓN!</button>




            </form>



        </div>
    )
}