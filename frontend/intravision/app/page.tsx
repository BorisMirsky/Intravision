"use client"

import React from 'react';
import styles from "./page.module.css";
import { Button, Space } from "antd";
import { Col, Row, Layout } from 'antd';


export default function Home() {


    const GoodsPage = async () => {
        window.location.href = 'goods';
        //router.push("/updateorder?id=" + id);
    };

    //div className={styles.page}

    return (
        <div className={styles.page}>
            <br /><br />
                <h3>Тестовое задание для компании Intravision</h3>
                <br/>
                    <Button
                        onClick={() => GoodsPage()}
                        style={{ flex: 1 }}
                    >
                    Go</Button>
        </div>
    );
}
