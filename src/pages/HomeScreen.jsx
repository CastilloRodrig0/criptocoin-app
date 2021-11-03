import React, { useEffect, useState } from 'react'
import {getCoins}  from '../helpers/fetchCoins'
import CoinNav from '../components/CoinNav';
import CoinTable from '../components/CoinTable';

const HomeScreen = () => {
    const [coins, setCoins] = useState({
    datos:[],
    loadin:true,
    update:true
    });
    // monta
    useEffect(() => {
        getCoins().then((respuesta)=>{
            // console.log(respuesta)
            setCoins({
                datos:respuesta,
                loading:false,
                update:false
            })
        })
    }, [])


    return (
        <>
            <CoinNav/>

            {/* tabla */}
            {coins.loading && <h3 className="text-white text-center">Cargando ...</h3>}
            <div className="container">
                <CoinTable coins={coins}/>
            </div>
            
        </>
    )
}

export default HomeScreen;