///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
//import { getAllCoins } from "@/app/Services/service";
import { Input, Button, Space } from 'antd';
import { useState, useEffect } from "react";

import "../globals.css";






export default function PaymentInterface() {
    //const [counter, setCounter] = useState<number>();

    //useEffect(() => {
        //setCounter(0);
        //const getCoins = async () => {
        //    const responce = await getAllCoins();
        //    setCoins(responce);
        //}
        //getCoins();
        //  СТРОКУ НИЖЕ НЕ УБИРАТЬ !
        // eslint-disable-next-line react-hooks/exhaustive-deps
    //}, [counter]);


    let counter_: number;
    

    const handleMinusButton = () => {
        counter_ --;
        //setCounter(counter_);
        console.log("counterMinus ", counter_);
    }


    const handlePlusButton = () => {
        counter_ ++;
        //setCounter(counter_);
        console.log("counterPlus ", counter_);
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
                defaultValue={counter_}
            />
            <Button
                onClick={() => handlePlusButton()}
            >
                +
            </Button>

        </div>
    );
}

