"use client"

import React from 'react';
//import AllGoods from '../Components/allGoodsComponent';
//import SelectBrand from '../Components/selectBrandComponent';
//import SliderElement from '../Components/sliderComponent';
//import ButtonImport from '../Components/buttonImportComponent';
//import SelectedButton from '../Components/selectedButtonComponent';
import PaymentInterface from '../Components/paymentInterfaceComponent';
import { getAllCoins } from "@/app/Services/service";
import { Col, Row, Layout, Button } from 'antd';
const { Header, Content, Footer } = Layout;
//import styles from "./page.module.css";
import { useState, useEffect } from "react";




export default function payment() {
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



    var currentSum:number = 0;
    Object.keys(coins).forEach(key => {
        var res:number = coins[key]["denomination"] * coins[key]["quantity"];
        currentSum = currentSum + res;
    })




    const handleBackButton = () => {
        console.log("currentSum ", currentSum);
        //window.location.href = 'goods';                    // !
    }


    const handlePayButton = () => {
        window.location.href = 'finish';     
    }

    return (
        <div>
            <br /><br />
            <Row justify="space-evenly">
                <Col span={5}><h3>Номинал</h3></Col>
                <Col span={5}><h3>Количество</h3></Col>
                <Col span={5}><h3>Сумма</h3></Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h4>1 рубль</h4></Col>
                <Col span={5}><PaymentInterface/>  </Col>
                <Col span={5}> руб.</Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h4>2 рубля</h4></Col>
                <Col span={5}><PaymentInterface /></Col>
                <Col span={5}>руб.</Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h4>5 рублей</h4></Col>
                <Col span={5}><PaymentInterface /></Col>
                <Col span={5}>руб.</Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h4>10 рублей</h4></Col>
                <Col span={5}><PaymentInterface /></Col>
                <Col span={5}>руб.</Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row justify="space-evenly">
                <Col span={5}></Col>
                <Col span={5}><h3>Итоговая сумма: {currentSum}</h3></Col>
                <Col span={5}><h3>Вы внесли: </h3></Col>
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
