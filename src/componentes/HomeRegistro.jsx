import React from "react";
import firebaseApp from "../FireBase/FireBase";
import { getAuth, signOut } from "firebase/auth";
import NavBarRegistro from "./NavBarRegistro";
import Carrusel from "./Carrusel";
import Footer from "./Footer";
const HomeRegistro = () =>{
    return(
        <div>
             
         <NavBarRegistro/>

        <Carrusel/>

         <Footer/>
        </div>
    )
}

export default HomeRegistro