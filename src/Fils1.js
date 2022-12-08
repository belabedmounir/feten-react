import React  from "react";
import {useContext}  from "react";
import data from "./Mon context";
export default function Fils1 () {
 let email = useContext (data) 
return (
    <div>
        Fils1
        <p>{email}</p>

    </div>
);
 }
