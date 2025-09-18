"use client"

import React from 'react';
import AllGoods from '../Components/allGoodsComponent';
import SelectBrand from '../Components/selectBrandComponent';
import SliderElement from '../Components/sliderComponent';
import ButtonImport from '../Components/buttonImportComponent';
import SelectedButton from '../Components/selectedButtonComponent';
import { Col, Row, Layout } from 'antd';
const { Header, Content, Footer } = Layout;
//import styles from "./page.module.css";


export default function goods() {
    return (
            <div>
                <br /><br /> <br />
            <Row justify="space-evenly">
                    <Col span={5}><h2>Каталог товаров</h2></Col>
                    <Col span={5}></Col>
                    <Col span={5}><ButtonImport /></Col>
                </Row>
                <br />
            <Row justify="space-evenly">
                    <Col span={5}><SelectBrand /></Col>
                    <Col span={5}><SliderElement /></Col>
                    <Col span={5}><SelectedButton /></Col>
                </Row>
                <br />
                <AllGoods />
            </div >
    );
}
