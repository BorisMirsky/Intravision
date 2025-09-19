"use client"

import React from 'react';
import styles from "./page.module.css";
import { Button } from "antd";


export default function Home() {
    const GoodsPage = async () => {
        window.location.href = 'goods';
    };


    return (
        <div className={styles.page}        >
            <br /><br />
            <h3>Тестовое задание для компании Intravision</h3>
            <br />
            <Button
                onClick={() => GoodsPage()}
                style={{ flex: 1 }}
            >
            Go</Button>
        </div>
    );
}
