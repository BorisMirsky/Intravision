"use client"

import React from 'react';
import styles from "./page.module.css";
import { Button } from "antd";
//import UserContext from "@/app/AppContext/AppContext";
//import user from "@/app/AppContext/AppContext";
//import UserContextProvider from "@/app/AppContext/AppContextProvider";  
//import UserContext from "../AppContext/AppContext";  
//import useUserData from '@/app/AppContext/AppContext';
//import { useState } from "react"; 



export default function Home() {

    const handleClick = async () => {
        window.location.href = 'goods';
    };

    return (
            <div className={styles.page}    >

                <br /><br />
                <div style={{ display: 'grid', placeItems: 'center' }}>
                    <h4>Тестовое задание для компании</h4>
                    <h1> Intravision</h1>
                <br />
                <p>
                    <Button
                        onClick={() => handleClick()}
                        style={{ flex: 1 }}
                    >
                                Go
                    </Button>
                </p>
                </div>

        </div>
    );
}
