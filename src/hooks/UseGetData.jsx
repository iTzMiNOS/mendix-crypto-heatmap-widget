import React, {createElement} from 'react';

const UseGetData = (props) => {
    let coinList = [];

    const coinItems = props.coinData.items.slice(0, 90);
    const { coinName, coinId, coinSymbol, coinChange, coinVolume, coinPrice, onClickCoin } = props;

    coinItems.forEach((item) => {
        const name = coinName.get(item).value;
        const id = coinId.get(item).value;
        const symbol = (coinSymbol.get(item).value).toUpperCase();
        const change = parseFloat(coinChange.get(item).value);
        const volume = parseFloat(coinVolume.get(item).value);
        const price = parseFloat(coinPrice.get(item).value);

        coinList.push({
            name,
            id,
            symbol,
            change,
            volume,
            price
        });
    });

    const callOnClickCoin = () => {
        if (onClickCoin && onClickCoin.canExecute) {
            onClickCoin.execute();
        }
    };


    return (
      {
        coinList,
        callOnClickCoin
      }
    )
}

export default UseGetData