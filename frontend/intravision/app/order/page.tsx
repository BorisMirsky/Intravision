"use client"

import React from 'react';
import PaymentInterface from '../Components/paymentInterfaceComponent';
import { getAllCoins } from "@/app/Services/service";
import { Col, Row, Layout, Button } from 'antd';
const { Header, Content, Footer } = Layout;
//import styles from "./page.module.css";
import { useState, useEffect } from "react";




export default function order() {
    const [coins, setCoins] = useState<string[]>([]);

    useEffect(() => {
        const getCoins = async () => {
            const responce = await getAllCoins();
            setCoins(responce);
        }
        getCoins();
        //  СТРОКУ НИЖЕ НЕ УБИРАТЬ !
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [coins]);



    var currentSum: number = 0;
    Object.keys(coins).forEach(key => {
        var res: number = coins[key]["denomination"] * coins[key]["quantity"];
        currentSum = currentSum + res;
    })




    const handleBackButton = () => {
        console.log("currentSum ", currentSum);
        window.location.href = 'goods';                    // !
    }


    const handlePayButton = () => {
        window.location.href = 'payment';
    }

    return (
        <div>
            <br /><br />
            <Row justify="space-evenly">
                <Col span={5}><h1>Оформление заказа</h1></Col>
                <Col span={5}></Col>
                <Col span={5}></Col>
                <Col span={5}></Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h3>Товар</h3></Col>
                <Col span={5}><h3>Количество</h3></Col>
                <Col span={5}><h3>Цена</h3></Col>
                <Col span={5}><h3>Удалить всё</h3></Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row justify="space-evenly">
                <Col span={5}></Col>
                <Col span={5}><PaymentInterface />  </Col>
                <Col span={5}> </Col>
                <Col span={5}> </Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row justify="space-evenly">
                <Col span={5}></Col>
                <Col span={5}></Col>
                <Col span={5}><h3>Итоговая сумма:  </h3></Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}>
                    <Button
                        onClick={() => handleBackButton()}
                    >
                        Вернуться
                    </Button>
                </Col>
                <Col span={5}></Col>
                <Col span={5}>
                    <Button
                        onClick={() => handlePayButton()}
                    >
                        Оплата
                    </Button></Col>
            </Row>
            <br /><br /><br />
        </div >
    );
}
