///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { getAllGoods, CardProps } from "@/app/Services/service";
import { Good } from "@/app/Models/Good";
//import { Table } from "antd";
import OneGoodCard from './oneGoodCardComponent';
import { useEffect, useState } from "react";
import "../globals.css";
import { Col, Row } from 'antd';



//const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };


export default function AllGoods() {
    const [goods, setGoods] = useState<Good[]>([]);

    useEffect(() => {
        const getGoods = async () => {
            const responce = await getAllGoods();
            setGoods(responce);
        }
        getGoods();
        //  СТРОКУ НИЖЕ НЕ УБИРАТЬ !
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [goods]);





    return (
        <div >
            <br /><br /><br />
            <br />
            <Row justify="space-evenly">
                <Col span={5}><OneGoodCard {...goods[0]} /></Col>
                <Col span={5}><OneGoodCard {...goods[1]} /></Col>
                <Col span={5}><OneGoodCard {...goods[2]} /></Col>
                <Col span={5}><OneGoodCard {...goods[3]} /></Col>
            </Row>
            <Row justify="space-evenly">
                <Col span={5}><OneGoodCard {...goods[4]} /></Col>
                <Col span={5}><OneGoodCard {...goods[5]} /></Col>
                <Col span={5}><OneGoodCard {...goods[6]} /></Col>
                <Col span={5}><OneGoodCard {...goods[7]} /></Col>
            </Row>
            <br /><br /><br /><br /><br /><br />
        </div>
    );
}

