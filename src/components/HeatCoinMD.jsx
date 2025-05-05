import React, {createElement} from 'react';

const HeatCoinMD = ({ coinId, coinSymbol, priceChange, currentPrice }) => {
  return (
    <>
    <a
    href={`p/coin/${coinId}`}
    key={coinSymbol}
    className={
      priceChange > 10.00 ? 'positive-bright-med' :
      priceChange > 5.00 ? 'positive-dark-med' :
      priceChange > 2.50 ? 'positive-darker-med' :
      priceChange > 1.50 ? 'positive-darker-med' :
      priceChange > 0.01 ? 'positive-darkest-med' :
      priceChange < -10.00 ? 'negative-bright-med' :
      priceChange < -5.00 ? 'negative-dark-med' :
      priceChange < -2.50 ? 'negative-darker-med' :
      priceChange < -1.50 ? 'negative-darker-second-med' :
      priceChange < -0.001 ? 'negative-darkest-med' :
      priceChange < -0.00 ? 'neutral-med' : 'neutral-med'
    }
    >
      <div
      className={
        priceChange > 10.00 ? 'coin-text-med' :
        priceChange > 5.00 ? 'coin-text-positive-dark-med' :
        priceChange > 2.50 ? 'coin-text-positive-dark-med' :
        priceChange > 1.50 ? 'coin-text-positive-darker-second-med' :
        priceChange > 0.01 ? 'coin-text-positive-darker-second-med' :
        priceChange < -10.00 ? 'coin-text-med' :
        priceChange < -5.00 ? 'coin-text-negative-dark-med' :
        priceChange < -2.50 ? 'coin-text-negative-darker-med' :
        priceChange < -1.50 ? 'coin-text-negative-darker-second-med' :
        priceChange < -0.001 ? 'coin-text-negative-darker-med' :
        priceChange < -0.00 ? 'coin-text-neutral-med' : 'coin-text-neutral-med'
      }
      >
        <span className='symbol-med'>
          {coinSymbol.toUpperCase()}
        </span>
        <span className='metric-med'>
        {`${currentPrice}$`}
        </span>
        <span className='metric-med'>
          {`${priceChange.toFixed(2)}%`}
        </span>
      </div>
    </a>
    </>
  )
}

export default HeatCoinMD