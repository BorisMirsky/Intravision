'use client';

import React from 'react';
//import UserContext, { IUser } from './AppContext';  
import DataContext, { IData } from './AppContext';  
import { Coin } from '../Models/Coin';
import { Good } from '../Models/Good';
import { Order } from '../Models/Order';
import { getAllGoods, getAllCoins, getAllOrders } from "@/app/Services/service";
import { useEffect, useState } from "react";



const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children, }) => {
    const [goods, setGoods] = useState<Good[]>([]);
    const [coins, setCoins] = useState<Coin[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        const getData = async () => {
            const responceGoods = await getAllGoods();
            const responceCoins = await getAllCoins();
            const responceOrders = []; // await getAllOrders();
            setGoods(responceGoods);
            setCoins(responceCoins);
            setOrders(responceOrders);
        }
        getData();
        //eslint-disable-next-line react-hooks/exhaustive-deps   
    }, [goods, orders, coins]);

    const appData: IData = {
        goods: goods,
        coins: coins,
        orders: orders
    };
    return (
        <DataContext.Provider value={appData}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;



//const value: IUser = {
//    name: "Bob",
//    age: 20
//};
//const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children, }) =>
//    return (
//        <UserContext.Provider value={value}>
//            {children}
//        </UserContext.Provider>
//    );
//};
//export default UserContextProv

//const goodsData: Array<Good> = [];
//const coinsData: Array<Coin> = [];
//const ordersData: Array<Order> = [];