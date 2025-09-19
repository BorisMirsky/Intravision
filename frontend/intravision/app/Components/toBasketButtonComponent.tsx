///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { Button, Space } from "antd";  
import "../globals.css";






export default function ToBasketButton() {

    const handleClick = () => {
        window.location.href = 'order';
        console.log("___Button Selected___");
    };


    return (
        <div>
                    <br/>
                    <Button
                        onClick={() => handleClick()}
                    //color={(!s.isBooked) ? "primary" : "danger"}
                    //variant="solid"
                    >
                        Оформление заказа
                    </Button>
        </div>
    );
}

