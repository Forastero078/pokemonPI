import styles from './Portada.module.css';
import { useState } from 'react';
import validate from './validation';



export default function Portada(props){

    const { login } = props;

    const [ userData, setUserData ] = useState({
        username: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({});

    const inputHandlers = (event) => {
        
        setUserData({
            ...userData,
            [ event.target.name ]: event.target.value
        });

        setErrors(validate(
            {
                ...userData
            })
            )};

    const submitHandler = (event) => {
        event.preventDefault();

        login(userData);
    }

    return (
        
        <div className={styles.divPadre}>
            <div className={styles.divUno}>
                <img className={styles.logo} src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Pokemon.png" alt="logo" />

                <div className={styles.titulo}>
                <h1 className={styles.title}>Pokemón App</h1>
                <h3 className={styles.subtitle}>Ultimate Pokemon Experience</h3>
                <hr/>
                
                <form onSubmit={submitHandler} className={styles.login}>
                <div className={styles.userAndPass}>
                <h5 className={styles.userAndPass}>Usuario:</h5>
                <input type='text' className={styles.inputs} name='username' value={userData.username} onChange={inputHandlers} placeholder='...usuario@email.com'/>
                { errors.username && <p className={styles.warning}>{errors.username}</p>}

                <br/>
                
                <h5 className={styles.userAndPass}>Password:</h5>
                <input type='text' className={styles.inputs} name='password' value={userData.password} onChange={inputHandlers} placeholder='...contraseña'/>
                { errors.password && <p className={styles.warning}>{errors.password}</p>}
                
                <br/>

                <button type='submit' className={styles.button}>LOGIN!</button>
                </div>
                </form>
                </div>
            </div>

            <div className={styles.divDos}>
            </div>

        </div>
        
    )
} 