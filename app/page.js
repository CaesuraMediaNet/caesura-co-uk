import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
         <h1>Caesura <span style={{fontSize : 12}}>[<i>sez-yoo-ra</i>]</span></h1>
         <p>(/sɪˈzjʊərə/, pl. caesuras or caesurae; Latin for &quot;cutting&quot;)</p>
         <hr />
         <blockquote className={styles.blockquote}>
            <p>
               In film : a Caesura is a sharp, unmedialized cut — rhythm breaks, tension born from silence or jump.
               <span className={styles.quoteLink}>
                  <a href="https://filmfarm.de/en/caesura" target="_blank">
                     https://filmfarm.de/en/caesura
                  </a>
               </span>
            </p>
         </blockquote>
         <blockquote className={styles.blockquote}>
            <p>
               In poetry : a Caesura is the juncture where one word ends and the following word begins within a foot. 
               <span className={styles.quoteLink}>
                  <a href="https://en.wikipedia.org/wiki/Caesura" target="_blank">
                     https://en.wikipedia.org/wiki/Caesura
                  </a>
               </span>
            </p>
         </blockquote>
         <blockquote className={styles.blockquote}>
            <p>
               In music : A caesura is a musical notation indicating a brief, complete pause or interruption in the flow of sound, often written as // and interpreted as a moment of silence at the performer’s discretion.
               <span className={styles.quoteLink}>
                  <a href="https://music-dictionary.org/notation-symbols/bar-lines-repeats/caesura/" target="_blank">
                     https://music-dictionary.org/notation-symbols/bar-lines-repeats/caesura/
                  </a>
               </span>
            </p>
         </blockquote>
         <p className={styles.box}>
            Author&apos;s note : When setting up a new company for IT freelancing, I had to come up with a name.  At the time (1994) I had spotted
            an article in the Guardian where you could pay &pound;400 and go on a 4-day film-making course in a studio
            in London (it was where the Monty Python team did their post production).
            I applied, paid the
            &pound;100 deposit and they sent me a manual -  &apos;How to make films&apos;.  Half of it was a glossary of filmic terms, amongst them was
            &nbsp;<i><b>Caesura</b> - a change of pace, a break in the action</i>.  I liked it a lot.  Then I got my first contract and never
            went on the course (I had to send the manual back, but, to their credit, they refunded my &pound;100.  Even after a lot of googling, I
            can&apos;t find the studio now, sorry).
         </p>
         <footer className={styles.box}>
            Design &copy; Andy Cragg &amp; Caesura Media Limited, 2026
            <br />
            <a style={{textDecoration : 'underline'}} href="https://www.caesuramedia.com" target="_blank">www.caesuramedia.com</a>
         </footer>
      </main>
    </div>
  );
}
