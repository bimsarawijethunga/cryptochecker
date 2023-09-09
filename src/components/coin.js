import React from 'react';
import './coin.css';

const coin = ({name, image, symbol, price, volume, priceChange, marketCap}) => {
  return (
    <div>
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='Coin Image'/>
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price}</p>
                    <p className='coin-volume'>${volume.toLocaleString()}</p>
                    {priceChange<0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ): (<p className='coin-percent red'>{priceChange.toFixed(2)}%</p>)}
                    <p className='coin-marketcap'>Mkt cap: {marketCap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default coin