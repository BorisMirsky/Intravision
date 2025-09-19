
//"use client"
// 3 contexts for Orders, Goods, Coins


import React from 'react';
//import { useState } from "react";
//import { Good } from "@/app/Models/Good";
import './App.css';
import GoodsContext from './AppContext';
import TestContext from './AppContext';



const GoodsContextProvider = () => (
    <GoodsContext.Provider value="GoodsContextParentPage">
        <h1>Ура, вместе с Gitverse создали провайдера!</h1>
    </GoodsContext.Provider>
);


const test = { testString: 'black' };

const TestContextProvider = () => (
    <TestContext.Provider value="test">
        <h1>Ура, вместе с Gitverse создали провайдера!</h1>
    </TestContext.Provider>
);

export default GoodsContextProvider;
