"use client"

import React from 'react';
import AllGoods from '../Components/allGoodsComponent';
import SelectBrand from '../Components/selectBrandComponent';
import SliderElement from '../Components/sliderComponent';
import ButtonImport from '../Components/buttonImportComponent';
import ToBasketButton from '../Components/toBasketButtonComponent';
import BasketIndicator from '../Components/basketIndicatorComponent';
import { Col, Row } from 'antd';     //Layout
//import { useUserData } from '@/app/AppContext/AppContext';
//const { Header, Content, Footer } = Layout;
//import styles from "./page.module.css";
//import UserContext from './AppContext';


export default function GoodsPage() {
    //const user = useUserData();



    return (
        <div>
            <br /><br /> <br /><br /> <br />
                <Row justify="space-evenly">
                        <Col span={6}><h2>Каталог товаров</h2></Col>
                    <Col span={6}><ButtonImport /></Col>
                    <Col span={6}><BasketIndicator /></Col>
                    </Row>
                    <br />
                <Row justify="space-evenly">
                        <Col span={6}><SelectBrand /></Col>
                        <Col span={6}><SliderElement /></Col>
                    <Col span={6}> <br /><br /> <ToBasketButton /></Col>
                </Row>
                <br />
                <hr />
                <br/>
                <AllGoods />
            </div >
    );
}
