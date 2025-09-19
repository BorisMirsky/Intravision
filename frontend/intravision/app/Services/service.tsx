

////////////////////////////////   props / interfaces / responses / requestes    /////////

export interface CardProps {
    brandId: string;
    brandName: string;
    brands: undefined; 
    description: string; 
    price: number;
    img: string;
    quantity: number;
    id: string;
    //isActive: boolean;
}


export interface IOrderOneBrand {
    brand: string;
    quantity: number;
    ordered: number;
}


export interface CoinRequest {
    denomination: number;
    quantity: number;
}
////////////////////////////////   fetch functions   /////////////////////////////////////////

export const getAllGoods = async () => {
    const response = await fetch("http://localhost:5260/goods/getgoods", {
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Credentials": 'true',
            "Access-Control-Allow-Methods": 'GET',
        },
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Not response", { cause: response });
                //window.location.href = 'noauthorized';
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            return data;
        })
        .catch(function (err) {
            console.log('Error: ', err);
        });
    return response;
};


export const getAllBrands = async () => {
    const response = await fetch("http://localhost:5260/brands/getbrands", {
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": 'true',
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": 'GET',
        },
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Not response", { cause: response });
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            //console.log("data ", data);
            return data;
        })
        .catch(function (err) {
            console.log('Error: ', err);
        });
    return response;
};


export const getAllCoins = async () => {
    const response = await fetch("http://localhost:5260/coins/getcoins", {
        headers: {
            'Content-type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": 'true',
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": 'GET',
        },
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Not response", { cause: response });
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            //console.log("COINS ", data);
            return data;
        })
        .catch(function (err) {
            console.log('Error: ', err);
        });
    return response;
};



export const updateOrder = async (request: CoinRequest) => {
    await fetch('http://localhost:5134/coins/update', {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(request)
    });
}