
import React from 'react';
//import { useState } from "react";
import { Good } from "@/app/Models/Good";


export type GoodContextType = {
    goodsProps: Good[];
};

//const GoodsContext = React.createContext(null);
//const goodsProps: Array<Good> = [];


interface Test {
    testString: string;
}

const TestContext = React.createContext<Test>({
    testString: "___666___"
});


export default TestContext;