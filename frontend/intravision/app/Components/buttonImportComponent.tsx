///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { Button, Space } from "antd";  //Card, Button,
import "../globals.css";






export default function ButtonImport() {

    const handleClick = () => {
        console.log("___ButtonImport___");
    };





    return (
        <div>
        <Space>
            <Button
                //key={s.id}
                onClick={() => handleClick()}
                //color={(!s.isBooked) ? "primary" : "danger"}
                //variant="solid"
                >Импорт</Button>
            </Space>
        </div>
    );
}

