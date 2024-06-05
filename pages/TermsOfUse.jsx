import { useState } from "react";
import styles from "../styles/TermsOfUse.module.css";

export default function TermsOfUse() {
  TermsOfUse.pageTitle = "Terms of use";
  const [isChecked, setIsChecked] = useState(false);

  const acceptTerms = () => {
    isChecked
      ? alert("Thanks for agreeing, enjoy your stay here")
      : alert("Please accept the terms of use");
  };

  return (
    <div className={styles.container}>
      <h1>Terms of Use</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque turpis
        nisl, imperdiet id dolor sed, imperdiet accumsan libero. Praesent
        egestas mollis cursus. Aenean ultrices at leo ut malesuada. Aliquam
        elementum, ipsum molestie ullamcorper euismod, justo nisl dictum nisi,
        quis mollis tortor enim eget ligula. Sed quis ex ipsum. Etiam viverra
        scelerisque consectetur. Aliquam justo sem, dapibus ut tincidunt id,
        molestie sed leo. Sed vulputate maximus fermentum. Curabitur non nibh eu
        tellus porta efficitur. Duis vel diam finibus, laoreet neque in,
        tincidunt tellus. Donec varius gravida arcu, a lacinia erat efficitur a.
      </p>
      <div className={styles.validationContainer}>
        <div>
          <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
          <span>I accept the Terms of Use</span>
        </div>
        <button className={styles.button} onClick={() => acceptTerms()}>
          OK
        </button>
      </div>
    </div>
  );
}
