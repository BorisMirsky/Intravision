"use client"

import React from 'react';
//import AllGoods from '../Components/allGoodsComponent';
//import SelectBrand from '../Components/selectBrandComponent';
//import SliderElement from '../Components/sliderComponent';
//import ButtonImport from '../Components/buttonImportComponent';
//import SelectedButton from '../Components/selectedButtonComponent';
import PaymentInterface from '../Components/paymentInterfaceComponent';
import { getAllCoins, CoinProps } from "@/app/Services/service";
import { Col, Row, Layout, Button } from 'antd';
const { Header, Content, Footer } = Layout;
//import styles from "./page.module.css";
import { useState, useEffect } from "react";




export default function payment() {
    const [coins, setCoins] = useState<object[]>([]);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(0);

    useEffect(() => {
        const getCoins = async () => {
            const responce = await getAllCoins();
            setCoins(responce);
        }
        getCoins();
        //  СТРОКУ НИЖЕ НЕ УБИРАТЬ !
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [coins]);



    const handleChildData1 = (data1: number) => {
        setCounter1(data1);
    };

    const handleChildData2 = (data2: number) => {
        setCounter2(data2);
    };

    const handleChildData3 = (data3: number) => {
        setCounter3(data3);
    };

    const handleChildData4 = (data4: number) => {
        setCounter4(data4);
    };


    var currentSum: number = (counter1 * 1) + (counter2 * 2) +
                             (counter3 * 5) + (counter4 * 10);

    //Object.keys(coins).forEach(key => {
    //    var res:number = coins[key]["denomination"] * coins[key]["quantity"];
    //    currentSum = currentSum + res;
    //})




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
                <Col span={5}><PaymentInterface {...coins[0]} onDataSend={handleChildData1} />  </Col>
                <Col span={5}> {counter1} руб.</Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h4>2 рубля</h4></Col>
                <Col span={5}><PaymentInterface {...coins[1]} onDataSend={handleChildData2}  /></Col>
                <Col span={5}>{counter2 * 2}  руб.</Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h4>5 рублей</h4></Col>
                <Col span={5}><PaymentInterface {...coins[2]} onDataSend={handleChildData3} /></Col>
                <Col span={5}>{counter3 * 5} руб.</Col>
            </Row>
            <br />
            <Row justify="space-evenly">
                <Col span={5}><h4>10 рублей</h4></Col>
                <Col span={5}><PaymentInterface {...coins[3]} onDataSend={handleChildData4} /></Col>
                <Col span={5}>{counter4 * 10} руб.</Col>
            </Row>
            <br />
            <hr />
            <br />
            <Row justify="space-evenly">
                <Col span={5}></Col>
                <Col span={5}><h3>Сумма заказа: руб.</h3></Col>
                <Col span={5}><h3>Вы внесли: {currentSum} руб.</h3></Col>
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
