const limite=10;
const url="https://api.coincap.io/v2/assets";
export const getCoins= async ()=>{
    const resp=await fetch('${url}?limit=${limite}');
    const {data}= await resp.json();
    return data;
};

