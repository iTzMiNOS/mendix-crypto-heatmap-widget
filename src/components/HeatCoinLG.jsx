import React, {createElement} from 'react';

const HeatCoinLG = ({ coinId, coinSymbol, priceChange, currentPrice }) => {
  return (
    <>
    <a
    href={`p/coin/${coinId}`}
    
    key={coinSymbol}
    className={
      priceChange > 10.00 ? 'positive-bright' :
      priceChange > 5.00 ? 'positive-dark' :
      priceChange > 2.50 ? 'positive-darker' :
      priceChange > 1.50 ? 'positive-darker-second' :
      priceChange > 0.01 ? 'positive-darkest' :
      priceChange < -10.00 ? 'negative-bright' :
      priceChange < -5.00 ? 'negative-dark' :
      priceChange < -2.50 ? 'negative-darker' :
      priceChange < -1.50 ? 'negative-darker-second' :
      priceChange < -0.001 ? 'negative-darkest' :
      priceChange < -0.00 ? 'neutral' : 'neutral'
    }
    >
      <div
      className={
        priceChange > 10.00 ? 'coin-text' :
        priceChange > 5.00 ? 'coin-text-positive-dark' :
        priceChange > 2.50 ? 'coin-text-positive-dark' :
        priceChange > 1.50 ? 'coin-text-positive-darker-second' :
        priceChange > 0.01 ? 'coin-text-positive-darker-second' :
        priceChange < -10.00 ? 'coin-text' :
        priceChange < -5.00 ? 'coin-text-negative-dark' :
        priceChange < -2.50 ? 'coin-text-negative-darker' :
        priceChange < -1.50 ? 'coin-text-negative-darker-second' :
        priceChange < -0.001 ? 'coin-text-negative-darker' :
        priceChange < -0.00 ? 'coin-text-neutral' : 'coin-text-neutral'
      }
      >
        <span className='symbol'>
          {coinSymbol.toUpperCase()}
        </span>
        <span className='metric'>
        {`${currentPrice}$`}
        </span>
        <span className='metric'>
          {`${priceChange.toFixed(2)}%`}
        </span>
      </div>
    </a>
    </>
  )
}


export default HeatCoinLG