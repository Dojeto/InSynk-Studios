import react, { useState } from "react";
import Modal from "./modal";
import logo from "../assets/InsynkST.png";
import styles from "../styles/Header.module.scss";
const Header = () => {
  const [getseach, setparams] = useState("");
  const searchApi = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=1c4e3d3e8632742c1c8bc423e914c565&query=`
    );
    const data = await response.json();
    props.setquery(data);
  };
  return (
    <>
      <div className={styles.header}>
        <div>
          <img src={logo} />
        </div>
        <div>
          <input
            className={styles.search}
            onChange={(e) => {
              setparams(e.target.value);
            }}
            placeholder="Search for a movie"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
