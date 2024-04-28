'use client'
import React from "react";
import type { PerfilCV } from "./cv";

export const perfilContext = React.createContext<PerfilCV>(null)

export function GetCV(){
    return React.useContext<PerfilCV>(perfilContext)
}