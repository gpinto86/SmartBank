import React from "react";
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import {Icono} from "../UI"

export default ({tema}) =>{
    const claro = <Icono src = {ThemeOn} alt="Tema Claro" />
    const oscuro = <Icono src = {ThemeOff} alt="Tema Oscuro" />

    return <> {tema ? oscuro : claro} </>;
}
