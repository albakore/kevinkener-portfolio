
import React from "react";
import type { PerfilCV } from "./cv";

const perfil_cv = require("./cv.json")

export const perfilContext = React.createContext<PerfilCV>(perfil_cv)

export function getCV(){
    return React.useContext(perfilContext)
}