import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/landingPage.module.css';
 
function LandingPage() {
  return (
    <div className={styles.container} >
        <h1 className={styles.h1} >Welcome to my Page</h1>
        <Link to='/home'  >
            <button className={styles.btn} >ENTER</button>
        </Link>
    </div>
  )
}

export default LandingPage