import React, { createElement } from "react";
import "./ui/HeatMap.css";
import UseGetData from "./hooks/UseGetData";
import HeatCoinLG from "./components/HeatCoinLG";
import HeatCoinMD from "./components/HeatCoinMD";
import HeatCoinSM from "./components/HeatCoinSM";

export function HeatMap(props) {
    if(props.coinData.status === 'available'){
        const {coinList, callOnClickCoin} = UseGetData(props);
        return (
            <>
                <div className="heatmap">
                    <div className="heatmap-container">
                        {coinList.map((row, index) => (
                        index <= 9 ? 
                        (
                            <HeatCoinLG 
                                coinId={row.id}
                                coinSymbol={row.symbol} 
                                priceChange={row.change} 
                                currentPrice={row.price} 
                            />
                        ) :
                        index <= 49 ? 
                        (
                            <HeatCoinMD
                                coinId={row.id}
                                coinSymbol={row.symbol} 
                                priceChange={row.change} 
                                currentPrice={row.price} 
                            />
                        ) : 
                        (
                            <HeatCoinSM
                                coinId={row.id}
                                coinSymbol={row.symbol} 
                                priceChange={row.change} 
                                currentPrice={row.price} 
                            />
                        )
                        ))}
                    </div>
                </div>
            </>
        );
    }
}
