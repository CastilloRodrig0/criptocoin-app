import React, { useEffect, useState } from "react";
import CoinNav from "../components/CoinNav";
import CoinTable from "../components/CoinTable";
import { getCoins } from "../helpers/fetchCoins";

const HomeScreen = () => {
  const [coins, setCoins] = useState({
    datos: [],
    loading: true,
    update: true,
  });

  //Monta
  useEffect(() => {
    getCoins().then((respuesta) => {
      setCoins({
        datos: respuesta,
        loading: false,
        update: false,
      });
    });
  }, [coins.update]);

  const actualizarData = () => {
    setCoins({
      ...coins,
      update: true,
    });
  };

  //Actualiza
  //desmonta

  //fetch

  return (
    <div>
      <CoinNav actualizarData={actualizarData} />

      {/* 
       
     ----------
     barra de busqueda
     -------------------
     tabla 
     --------------------
     */}

      {/* {coins.loading && <h3 className="text-white text-center">Cargando...</h3>} */}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <CoinTable coins={coins} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;