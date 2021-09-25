import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser} from "./features/userSlice";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const user = useSelector(selectUser)
    const history = useHistory();

    const trnasitionNavbar = () =>{
        if(window.scrollY > 100) {
            handleShow(true);
        }else {
            handleShow(false)
        }
    }

    useEffect(() =>{
      window.addEventListener("scroll", trnasitionNavbar)
      return () => window.removeEventListener("scroll", trnasitionNavbar)

    }, [])



  return (
    <div className={`nav ${show && 'nav__black'}` }>
      <div className="nav__contents">
        <img
          onClick={() => user.subscriptions &&  history.push("/")}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix"
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://smashinglogo.com/static/img/virtual-designers/peter.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
