///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { getAllBrands } from "@/app/Services/service";
//import 'antd/dist/antd.css';
import { Slider, Space } from "antd";  //Card, Button,
//const { Meta } = Card;
import { Brand } from "@/app/Models/Brand";
import { useState, useEffect } from "react";
import type { SliderSingleProps } from 'antd';
//import Link from "next/link";
import "../globals.css";
//import Title from "antd/es/typography/Title";
//import moment from 'moment';





export default function SliderElement() {
    //const [brands, setBrands] = useState<Brand[]>([]);

    //useEffect(() => {
    //    const getBrands = async () => {
    //        const responce = await getAllBrands();
    //        setBrands(responce);
    //    }
    //    getBrands();
    //    //console.log("brandsData ", brandsData);
    //    //  СТРОКУ НИЖЕ НЕ УБИРАТЬ !
    //    // eslint-disable-next-line react-hooks/exhaustive-deps   
    //}, [brands]);

    const handleSelectedBrand = (value: string) => {
        console.log("666", value);
    };

    const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value}%`;



    return (
        <div>
            <br /><br />
            <p>Стоимость</p>
            <br />
            <div>
                <Space direction="vertical" size={16}>
                    <Slider tooltip={{ formatter: null }} />
                </Space>
            </div>
        </div>
    );
}

