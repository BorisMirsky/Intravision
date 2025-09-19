///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import Image from 'next/image'
import { CardProps, IOrderOneBrand } from "@/app/Services/service";   //getAllGoods,
//import { Patient } from "@/app/Models/Patient";
//import { Slot } from "@/app/Models/Slot";
//import { Select, Space, DatePicker, Button, Form, FormProps } from 'antd';
import { Card, Button, Space } from "antd";
//const { Meta } = Card;
//import { Order } from "@/app/Models/Order";
import { useEffect, useState } from "react";
//import Link from "next/link";
import "../globals.css";
//import Title from "antd/es/typography/Title";
//import moment from 'moment';


//const DoctorAppointment: React.FC<DoctorAppointmentProps> = ({ booking }) => {
export default function OneGoodCard(props: CardProps) {
    const [counter, setCounter] = useState(0);

    const increment = (num: number): void => {
        setCounter(counter + num);
    }

    let currentOrder: IOrderOneBrand;


    const handleSelectClick = (brandname: string, quantity: number) => {
        increment(1);
        console.log(brandname, quantity, counter);
    };


    return (
        <div>
            <br /><br /><br />
            <div>
                <Space
                    direction="vertical" align="center"
                >
                <Card
                        style={{
                            border: '2px solid #808080',
                            borderRadius: '8px',
                            //width="100"
                        }}
                    cover={
                        <img
                            draggable={false}
                            alt="example"
                            src={props.img}
                            //width="80" height="150"
                        />
                    }
                    >
                        <p align="center">{props.description}</p>
                        <p align="center">{props.brandName}</p>
                        <br />
                        <p align="center">{props.price} руб.</p>
                        <br />
                        <p>
                            <Button
                                color={(props.quantity > 0) ? "yellow" : "default"}
                                disabled={!props.quantity}
                                variant="solid"
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

