///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
//import { getAllCoins } from "@/app/Services/service";
import { Input, Button } from 'antd';
import { useState } from "react";    

import "../globals.css";



export default function PaymentInterface() {
    const [counter, setCounter] = useState(0);

    const increment = (num: number): void => {
        setCounter(counter + num);
    }
    

    const handleMinusButton = () => {
        if (counter > 0)
        {
            increment(-1);
        }
        console.log("counterMinus ", counter);
    }


    const handlePlusButton = () => {
        increment(1);
        console.log("counterPlus ", counter);
    }



    return (
        <div>
            <Button
                onClick={() => handleMinusButton()}
            >
                -
            </Button>
            <Input
                style={{ width: 50 }}
                //defaultValue={counter}
                value={counter}
            />
            <Button
                onClick={() => handlePlusButton()}
            >
                +
            </Button>

        </div>
    );
}

