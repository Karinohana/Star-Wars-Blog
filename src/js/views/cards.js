import React, { useState, useEffect, useContext } from "react";
import { Character } from "../component/character";
import { Planets } from "../component/planets";
import { Ships } from "../component/ships";
export const Cards = () => {
    return (
        <>
        <Character/>
        <Ships/>
        <Planets/>
        </>
    );
};