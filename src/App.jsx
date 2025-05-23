import { useState } from 'react'
import './App.css'
import BlockGrid from './components/coinBalances'
import ExcessCoin from './components/ExcessCoin';

import btcIMG from './assets/btc.png';
import usdtIMG from './assets/usdt.svg';
import ethIMG from './assets/eth.png';

function App() {


const [showPopup, setShowPopup] = useState(false);
const [selectedCoin, setSelectedCoin] = useState(null);

  const blockData = [
  {
    icon: btcIMG,
    name: "BTC",
    changeType: "success",
    change: "2.3",
    balance: "0.45",
    rate: "62,500.00",
    exchangeAmount: "0.20"
  },
  {
    icon: usdtIMG,
    name: "USDT",
    changeType: "success",
    change: "0.01",
    balance: "10,250.75",
    rate: "1.0",
    exchangeAmount: "500.0"
  },
  {
    icon: ethIMG,
    name: "ETH",
    changeType: "fail",
    change: "1.2",
    balance: "3.20",
    rate: "3,450.00",
    exchangeAmount: "1.50"
  }
];


 const handleExchange = (coinName) => {
  const coinInfo = blockData.find((coin) => coin.name === coinName);

  if (coinInfo) {
    // Destructure each value into its own variable
    const {
    icon,
    name,
    changeType
    } = coinInfo;


    
    // Convert all numeric strings to proper numbers
    const change = parseFloat(coinInfo.change.replace('%', '')); // e.g., "2.3%" → 2.3
    const balance = parseFloat(coinInfo.balance.replace(/,/g, '')); // "10,250.75" → 10250.75
    const rate = parseFloat(coinInfo.rate.replace(/,/g, '')); // "62,500.00" → 62500
    const exchangeAmount = parseFloat(coinInfo.exchangeAmount.replace(/,/g, '')); // "0.20" → 0.2


    // You can now use each variable directly
    console.log("Icon:", icon);
    console.log("Coin Name:", name);
    console.log("Change Type:", changeType);
    console.log("Change:", change);
    console.log("Balance:", balance);
    console.log("Rate:", rate);
    console.log("Exchange Amount:", exchangeAmount);

    
    // Example: maybe open a modal or route with this data
    // openModal({ icon, name, balance, ... });

     setSelectedCoin(coinInfo);
    setShowPopup(true);
  } else {
    console.log("Coin not found.");
  }
};




  return (
    <>
    <div className='bodyy'>
      <div className="">

      <div className="topsection">
        <div className="name">
          <h3>Coin Balances</h3>
        </div>

        <div className="refresh">
          <button> <i className="fa fa-refresh"></i> &nbsp; Refresh &nbsp; <i className="fa fa-chevron-down"></i></button>
        </div>
      </div>
    {/* <coins */}
    <div className='row'>
      {blockData.map((item, index) => (
        <BlockGrid
          key={index}
          icon={item.icon}
          name={item.name}
          changeType={item.changeType}
          change={item.change}
          balance={item.balance}
          rate={item.rate}
          exchangeAmount={item.exchangeAmount}

          onExchange={() => handleExchange(item.name)}
        />
      ))}

        
    </div>
</div>

{showPopup && selectedCoin && (
  <ExcessCoin coin={selectedCoin} onClose={() => setShowPopup(false)} />
)}


   
    </div>
    </>
  )
}

export default App
