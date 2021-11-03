import React from 'react'

const CoinSymbol = ({symbol}) => {
    return (
        <img src="https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png
        " alt="{symbol}" />
    )
}

export default CoinSymbol
