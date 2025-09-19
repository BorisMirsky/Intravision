///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { getAllBrands } from "@/app/Services/service";
//import { Patient } from "@/app/Models/Patient";
//import { Slot } from "@/app/Models/Slot";
//import { Select, Space, DatePicker, Button, Form, FormProps } from 'antd';
import { Select, Space } from "antd";  //Card, Button,
//const { Meta } = Card;
import { Brand } from "@/app/Models/Brand";
import { useState, useEffect } from "react"; 
//import Link from "next/link";
import "../globals.css";
//import Title from "antd/es/typography/Title";
//import moment from 'moment';





export default function SelectBrand() {
    const [brands, setBrands] = useState<string[]>([]);

    useEffect(() => {
        const getBrands = async () => {
            const responce = await getAllBrands();
            setBrands(responce);
        }
        getBrands();
        //  СТРОКУ НИЖЕ НЕ УБИРАТЬ !
        // eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [brands]);

    const handleSelectedBrand = (value: number) => {
        const valuesArray = Object.values(brandsData)
        console.log("handleSelectedBrand", valuesArray[value].label);
    };


    const brandsData = brands.map((brand: string, index: number) => ({
        value: index, 
        label: brand  
    }));




    return (
        <div>
            <br /><br />
            <p>Выберите товар</p>
            <div>
                <Space direction="vertical" size={16}>
                    <Select
                        placeholder="Все бренды"
                        style={{ width: 200 }}
                        onChange={handleSelectedBrand}
                        options={brandsData}
                    />
                </Space>
            </div>
        </div>
    );
}

