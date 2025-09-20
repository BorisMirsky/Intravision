/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { CardProps, IOrderOneBrand } from "@/app/Services/service";  
import { Card, Button, Space } from "antd";
import { useState } from "react";
import "../globals.css";
//
import { useData, IData } from '@/app/AppContext/AppContext';



export default function OneGoodCard(props: CardProps) {
    const [counter, setCounter] = useState(0);
    const data:IData = useData();

    const increment = (num: number): void => {
        setCounter(counter + num);
    }


    const handleSelectClick = (brandname: string, quantity: number) => {
        increment(1);
        console.log(brandname, quantity, counter);
    };


    return (
        <div>
            <br /><br /><br />
            <br /><br /><br />
            <br /><br /><br />
            <div>
                <Space
                    direction="vertical" align="center"
                >
                <Card
                    style={{
                            border: '2px solid #808080',
                            width: 200,
                            height: 600
                        }}
                    cover={ <img src={props.img} /> }
                    >
                        <p style={{ textAlign: 'center' }}>{props.description}</p>
                        <p style={{ textAlign: 'center' }}>{props.brandName}</p>
                        <br />
                        <p style={{ textAlign: 'center' }}>{props.price} руб.</p>
                        <br />
                        <p>
                            <Button
                                color={(props.quantity > 0) ? "yellow" : "default"}
                                disabled={!props.quantity}
                                variant="solid"
                                style={{ textAlign: 'center' }}
                                onClick={() => handleSelectClick(props.brandName, props.quantity)}
                            >
                                {(props.quantity > 0) ? "Выбрать" : "Закончилось"}
                            </Button>
                        </p>
                    </Card>
                </Space>
            </div>
        </div>
    );
}

