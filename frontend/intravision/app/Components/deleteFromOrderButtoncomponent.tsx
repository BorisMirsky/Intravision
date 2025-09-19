///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { Button, Space } from "antd";
import "../globals.css";






export default function DeleteFromOrderButton() {

    const handleClick = () => {
        //window.location.href = 'order';
        console.log("delete from order (run 'order/update/...'");
    };


    return (
        <div>
            <br />
            <Button
                onClick={() => handleClick()}
            //color={(!s.isBooked) ? "primary" : "danger"}
            //variant="solid"
            >
                Удалить всё
            </Button>
        </div>
    );
}

