import React from "react";
import firebaseApp from "../FireBase/FireBase";
import { getAuth, signOut } from "firebase/auth";
import NavBarRoot from "./NabvarRoot";
import CarruselRoot from "./CarruselRoot";
import Footer from "./Footer";
const HomeRegistro = () =>{
    return(
        <div>
             
         <NavBarRoot/>

        <CarruselRoot/>

         <Footer/>
        </div>
    )
}

export default HomeRegistro