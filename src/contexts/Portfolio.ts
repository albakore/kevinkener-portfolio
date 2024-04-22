'use client'
import React from "react";
import type { PerfilCV } from "./cv";

const perfil_cv = require("./cv.json")

export const perfilContext = React.createContext<PerfilCV>(perfil_cv)

export function GetCV(){
    return React.useContext<PerfilCV>(perfilContext)
}