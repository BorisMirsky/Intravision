///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { useState, useEffect } from "react";
import "../globals.css";





export default function BasketIndicator() {
    const [counter, setCounter] = useState(0);
    

    return (
        <div>
            <p>Сейчас в корзине {counter} заказов</p>
        </div>
    );
}

