///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { getAllGoods, CardProps } from "@/app/Services/service";
//import { Patient } from "@/app/Models/Patient";
//import { Slot } from "@/app/Models/Slot";
//import { Select, Space, DatePicker, Button, Form, FormProps } from 'antd';
import { Card, Button, Space } from "antd";
const { Meta } = Card;
//import { Order } from "@/app/Models/Order";
//import { useEffect, useState } from "react";
//import Link from "next/link";
import "../globals.css";
//import Title from "antd/es/typography/Title";
//import moment from 'moment';





export default function OneGoodCard(props: CardProps) {




    return (
        <div>
            <br /><br /><br />
            <div>
                <Space direction="vertical" size={16}>
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
                            src="coca-cola.jpg"
                            //width="50" height="100"
                        />
                    }
                >
                        <p>Описание товара</p>
                        <p>BrandName</p>
                        <br />
                        <p>Цена товара</p>
                        <br />
                        <p>
                                <Button> жми уже!</Button>
                        </p>
                    </Card>
                </Space>
            </div>
        </div>
    );
}

