"use client"

import React from 'react';
//import PaymentInterface from '../Components/paymentInterfaceComponent';
//import { getAllCoins } from "@/app/Services/service";
import { Col, Row, Layout, Button } from 'antd';
const { Header, Content, Footer } = Layout;
//import styles from "./page.module.css";
import { useState, useEffect } from "react";




export default function FinishPage() {
    //const [shortchanges1, setShortchanges1] = useState<string[]>([]);

    //useEffect(() => {
    //    const getCoins = async () => {
    //        const responce = await getAllCoins();
    //        setCoins(responce);
    //    }
    //    getCoins();
    //    //  СТРОКУ НИЖЕ НЕ УБИРАТЬ !
    //    // eslint-disable-next-line react-hooks/exhaustive-deps   
    //}, [coins]);



    //var currentSum: number = 0;
    //Object.keys(coins).forEach(key => {
    //    var res: number = coins[key]["denomination"] * coins[key]["quantity"];
    //    currentSum = currentSum + res;
    //})




    const handleButton = () => {
        window.location.href = 'goods';                    
    }




    return (
        <div>
            <br /><br /><br /><br />
            <Row justify="space-evenly">
                <Col span={5}><h3>Спасибо за покупку!</h3></Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h3>Возьмите свою сдачу: </h3></Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h3>1 рубль: </h3></Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h3>2 рубля: </h3></Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h3>5 рублей: </h3></Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h3>10 рублей: </h3></Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}>
                    <Button
                        onClick={() => handleButton()}
                    >
                        Каталог товаров
                    </Button></Col>
            </Row>
            <br /><br /><br />
        </div >
    );
}
