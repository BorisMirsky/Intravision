'use client';

import React from 'react';
import { useContext } from "react";
import { Coin } from '../Models/Coin';
import { Good } from '../Models/Good';
import { Order } from '../Models/Order';


//export interface IUser {       //export type IUser = {
//    name: string,
//    age: number
//}
//export const user: IUser = {
//    name: undefined,
//    age: undefined
//}
//const UserContext = React.createContext<IUser>(user);
//export function useUserData() {
//    return useContext(UserContext);
//}
//export default UserContext;

///////////////////////////////////////////////////////////////////




export interface IData {
    goods: Array<Good>;
    coins: Array<Coin>;
    orders: Array<Order>;
}

const appData: IData = {
    goods: undefined,
    coins: undefined,
    orders: undefined
};


const DataContext = React.createContext<IData>(appData);
export function useData() {
    return useContext(DataContext);
}
export default DataContext;




