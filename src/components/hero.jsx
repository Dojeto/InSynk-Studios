import react from "react";
import style from "../styles/Hero.module.scss";
import { useEffect, useState } from "react";
import Modal from "./modal";
const Hero = (props) => {
  const [movieInfo, setinfobox] = useState(false);
  const [keyvalue, setkeyvalue] = useState(0);
  const imageBase = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  const url =
    props.data["data"] === undefined ? [] : props.data["data"]["results"];
  return (
    <>
      <h2>Most Recent Movie</h2>
      <div className={style.maincontainer}>
        <div className={style.gridcontainer}>
          {!movieInfo ? (
            <>
              {url.map((ele, ind) => {
                return (
                  <>
                    <div
                      key={ind}
                      onClick={() => {
                        setinfobox(true);
                        setkeyvalue(ind);
                      }}
                      className={style.card}
                    >
                      <img
                        className={style.imagest}
                        src={imageBase + ele["backdrop_path"]}
                      />
                      <h4>{ele["original_title"]}</h4>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <Modal
                title={
                  props.data["data"]["results"][keyvalue]["original_title"]
                }
                close={() => {
                  setinfobox(false);
                }}
              >
                <div className={style.modalflex}>
                  <img
                    className={style.mimage}
                    src={
                      imageBase +
                      props.data["data"]["results"][keyvalue]["backdrop_path"]
                    }
                  />
                  <div style={{ margin: "10px" }}>
                    <h3>
                      ReleseDate :
                      {props.data["data"]["results"][keyvalue]["release_date"]}
                    </h3>
                    {props.data["data"]["results"][keyvalue]["overview"]}
                  </div>
                </div>
              </Modal>
            </>
          )}

          {/* <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
          <div className="grid-item">9</div>
          <div className="grid-item">7</div>
          <div className="grid-item">8</div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
