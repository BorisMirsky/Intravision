///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { Button, Space } from "antd";  
import "../globals.css";






export default function SelectedButton() {

    const handleClick = () => {
        window.location.href = 'order';
        console.log("___Button Selected___");
    };


    return (
        <div>
            <div>
                <Space>
                    <Button
                        //key={s.id}
                        onClick={() => handleClick()}
                    //color={(!s.isBooked) ? "primary" : "danger"}
                    //variant="solid"
                    >Выбрано</Button>
                </Space>
            </div>
        </div>
    );
}

