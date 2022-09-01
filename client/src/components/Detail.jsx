import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailId, resetState } from '../redux/action';
import { useEffect } from 'react';
import styles from '../styles/detail.module.css';

function Detail(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailId(props.match.params.id));
    
    return ()=> {
      dispatch(resetState())
    };
      
  },[dispatch, props.match.params.id])

  const myCountry = useSelector((state) => state.detail)


  return (
    <div>
      <div className={styles.nav}>
        <li className={styles.li}><Link to='/home'>BACK TO HOME</Link></li>
      </div>
      <div className={styles.container}>
       {myCountry.err ? 
        <div className={styles.error404}>
            <Link to='/home'>
                <img src="https://img.freepik.com/vector-premium/404-pagina-error-no-encontrada-ilustracion-tierra-triste_9638-4.jpg" alt="Not found" />
            </Link>
        </div>
        :
          myCountry ? 
          <div >
            
            
            <div className={styles.card}>
              <img src={myCountry.flags? myCountry.flags: myCountry.img } alt="not fount" />
              <h3 className={styles.titleone} >{myCountry.name}</h3>
              <p className={styles.letter}><strong>ID : </strong>{myCountry.id}</p>
              <p className={styles.letter}><strong>Capital : </strong>{myCountry.capital}</p>
              <p className={styles.letter}><strong>Continent : </strong>{myCountry.continents}</p>
              <p className={styles.letter}><strong>Subregion : </strong>{myCountry.subregion}</p>
              <p className={styles.letter}><strong>Area : </strong>{myCountry.area} km²</p>
              <p className={styles.letter}><strong>Population : </strong>{myCountry.population}</p>
            </div>
            
            

          </div> : <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Mundo_hecho_de_Banderas.gif" alt="loading" /> 
          
        }

        <div className={styles.card2}>

          {
            myCountry.activities ?
            
            myCountry.activities.map((el, i) => {
              return (
                <div className={styles.card3} >
                  <p><strong>Activity {i + 1} : </strong>{el.name}</p>
                  <p ><strong>Difficulty : </strong>{el.difficulty}</p>
                  <p ><strong>Duration : </strong>{el.duration} Hours</p>
                  <p ><strong>Season : </strong>{el.season}</p>
                  
                </div> 
              )
            }) : null 
            
          }
        </div>
      </div>    
    
    </div>
  )
}

export default Detail