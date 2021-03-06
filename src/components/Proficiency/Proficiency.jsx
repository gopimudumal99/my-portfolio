import React from "react";
import "./Proficiency.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "./../Card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Proficiency() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="proficency" id="proficency">
      <div className="p-left awesome mobileview">
        <span style={{ color: darkMode ? "white" : "" }}>My Areas of</span>
        <span>Proficiency</span>
        <span>
          I completed more then 1200 hours of full stack coding, solving more
          than 300+ problems
          <br />
          of Data structure and algorithms and more then 100 hours soft skill
          and built 10+ projects <br /> in my Masai journey.
        </span>
        <Link to="contact" spy={true} smooth={true}>
          <button className=" pd-button">Hire me</button>
        </Link>

        <div
          className="blur p-blur-1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"DS & Algo"}
            details={"Intermediate level of Data structures and Algo"}
            link={"https://github.com/gopimudumal99/DSA"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ left: "-4rem", top: "12rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Frontend"}
            details={"HTML, CSS, React, Redux, Javascript, MaterialUI"}
            link={"https://github.com/gopimudumal99"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: "12rem", top: "19rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Backend"}
            details={"Express.js, Firebase, MongoDB, Node.js"}
            link={"https://github.com/gopimudumal99"}
          />
        </motion.div>
        <div
          className="blur p-blur-2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Proficiency;
