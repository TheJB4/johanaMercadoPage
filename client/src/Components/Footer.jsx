import React, { useState, useEffect } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Footer(){
    return (
        <footer>
            <p>Consultorio: Virgen de la merced 1115</p>
            <p>Telefono: 3816306433</p>
            <p>Mail: johanamer@gmail.com</p>
            <div>
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaSquareWhatsapp />
            </div>
        </footer>
    )
}

export default Footer