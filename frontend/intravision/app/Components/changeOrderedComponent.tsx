///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { CoinProps } from "@/app/Services/service";
import { Input, Button } from 'antd';
import { useState } from "react";

import "../globals.css";



export default function OrderedInterface() {     //props: CoinProps
    const [counter, setCounter] = useState(0);


    const increment = (num: number): void => {
        setCounter(counter + num);
        //props.onDataSend(counter + num);
    }

    const handleMinusButton = () => {
        if (counter > 0) {
            increment(-1);
        }
    }

    const handlePlusButton = () => {
        //if (counter < props.quantity) {
            increment(1);
        //}
    }

    // вручную указали сколько монет
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        //if (Number(e.target.value) < (props.quantity - counter) && Number(e.target.value) > 0) {
            increment(Number(e.target.value));
        //}
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
                value={counter}
                onInput={handleInput}
            />
            <Button
                onClick={() => handlePlusButton()}
            >
                +
            </Button>

        </div>
    );
}

