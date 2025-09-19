///* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react';
import { getAllBrands } from "@/app/Services/service";
import { Slider, Space } from "antd";
import { Brand } from "@/app/Models/Brand";
import { useState, useEffect } from "react";
import type { SliderSingleProps } from 'antd';
import "../globals.css";





export default function SliderElement() {
    const [disabled, setDisabled] = useState(false);
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

    const onChange = (checked: boolean) => {
        setDisabled(checked);
    };

    //const handleSelectedBrand = (value: string) => {
    //    console.log("666", value);
    //};

    //const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value}%`;
    //tooltip = {{ formatter: null }}


    return (
        <div>
            <br /><br />
            <p>Стоимость</p>
            <div>
                <Slider defaultValue={30} disabled={disabled} />
            </div>
        </div>
    );
}

