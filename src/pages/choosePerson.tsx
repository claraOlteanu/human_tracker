import styles from '../styles/choosePerson.module.css';
import { redirect } from 'next/navigation';

export default function Home() {

  return (
    <main className={styles.main}>
        <div className="container">
            <h2><center>Choose person to track:</center></h2>
            <div className="dropdown">
                <button className="dropbtn-choose-person">Choose</button>
                <div className="dropdown-content">
                    <a href="home1.html">Grandma</a>
                    <a href="home2.html">Grandpa</a>
                    <a href="home3.html">Uncle</a>
                </div>
            </div>
        </div>
    </main>
  )
}