import React, {createElement} from 'react';

const HeatCoinSM = ({ coinId, coinSymbol, priceChange, currentPrice }) => {
  return (
    <>
    <a
    href={`p/coin/${coinId}`}
    key={coinSymbol}
    className={
      priceChange > 10.00 ? 'positive-bright-sm' :
      priceChange > 5.00 ? 'positive-dark-sm' :
      priceChange > 2.50 ? 'positive-darker-sm' :
      priceChange > 1.50 ? 'positive-darker-sm' :
      priceChange > 0.01 ? 'positive-darkest-sm' :
      priceChange < -10.00 ? 'negative-bright-sm' :
      priceChange < -5.00 ? 'negative-dark-sm' :
      priceChange < -2.50 ? 'negative-darker-sm' :
      priceChange < -1.50 ? 'negative-darker-second-sm' :
      priceChange < -0.001 ? 'negative-darkest-sm' :
      priceChange < -0.00 ? 'neutral-sm' : 'neutral-sm'
    }
    >
      <div
      className={
        priceChange > 10.00 ? 'coin-text-sm' :
        priceChange > 5.00 ? 'coin-text-positive-dark-sm' :
        priceChange > 2.50 ? 'coin-text-positive-dark-sm' :
        priceChange > 1.50 ? 'coin-text-positive-darker-second-sm' :
        priceChange > 0.01 ? 'coin-text-positive-darker-second-sm' :
        priceChange < -10.00 ? 'coin-text-sm' :
        priceChange < -5.00 ? 'coin-text-negative-dark-sm' :
        priceChange < -2.50 ? 'coin-text-negative-darker-sm' :
        priceChange < -1.50 ? 'coin-text-negative-darker-second-sm' :
        priceChange < -0.001 ? 'coin-text-negative-darker-sm' :
        priceChange < -0.00 ? 'coin-text-neutral-sm' : 'coin-text-neutral-sm'
      }
      >
        <span className='symbol-sm'>
          {coinSymbol.toUpperCase()}
        </span>
        <span className='metric-sm'>
          {`${currentPrice}$`}
        </span>
        <span className='metric-sm'>
          {`${priceChange.toFixed(2)}%`}
        </span>
      </div>
    </a>
    </>
  )
}

export default HeatCoinSM