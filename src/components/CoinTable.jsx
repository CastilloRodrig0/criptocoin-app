import React from 'react'
import numeral from 'numeral';

const CoinTable = ({coins}) => {
    const {datos} = coins;       

    return (
        <div>
            <table className="table table-coin">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>VWAP(24HS)</th>
                        <th>Supply</th>
                        <th>Volumen(24HS)</th>
                        <th>Change(24HS)</th>
                    </tr>
                    <tbody>
                        {
                            datos.map(coin=>(
                                <tr key={coin.id}>
                                    <td>{coin.rank}</td>
                                    <td>{coin.name}</td>
                                    <td>{numeral(coin.priceUsd}).format('$0,0.00')</td>
                                    <td>{coin.marketCapUsd}</td>
                                    <td>{coin.vwap24Hr}</td>
                                    <td>{coin.supply}</td>
                                    <td>{coin.volumeUsd24Hr}</td>
                                    <td>{coin.changePercent24Hr}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </thead>
            </table>
            
        </div>
    )
}

export default CoinTable
