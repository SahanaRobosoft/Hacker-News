import React from "react";
import Header from "./Header";
import News from "./News";
import styles from "../styles/Home.module.css";
function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <News />
      <div></div>
    </div>
  );
}

export default Home;
