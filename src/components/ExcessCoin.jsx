import { useState, useEffect } from 'react'

const ExcessCoin = ({coin, onClose}) =>{


  const { name: coinName, balance, exchangeAmount, rate } = coin;

  const [capitalCoin, setCapitalCoin] = useState(balance - exchangeAmount);
  const [rateOption, setRateOption] = useState("Market");

  const excessCoin = balance - capitalCoin;

  useEffect(() => {
    setCapitalCoin(balance - exchangeAmount);
  }, [balance, exchangeAmount]);

  const handleExecute = () => {
    console.log({
      coin: coinName,
      totalCoin: balance,
      capitalCoin,
      excessCoin,
      rate,
      rateOption
    });
  };





    return(
        <>
        <div className="modal">
            <div className="content">
                <div className="form">
                    {/* <div className="head"><h3>{ coin.rate +" "+ coin.name}</h3></div> */}



  <h2 className="hea"><span>Excess Coin Details - {coinName}</span> <i onClick={onClose} className='fa fa-x'></i></h2>
<br/>
        
        <div className="form-group">
            <div className="">
            <label>Total Coin (Wallet + Vendor)</label><br></br>
            <input className="input" value={balance} disabled readOnly />
            </div>

            <div className="rate">
            <span>Current Rate</span><br/>
           <span className='rr'> {`US $${rate}`} </span>
            </div>
        </div>
<br/>

<div className="form-group">
    <div className="">
        <label>Capital Coin</label><br></br>
        <input
          className="input long"
          value={capitalCoin}
          type="number"
          onChange={(e) => setCapitalCoin(parseFloat(e.target.value) || 0)}
        />
        
        </div>

</div>
<br></br>

<div className="form-group">
<div className="">
        <label>Excess Coin</label><br/>
        <input className="input long" value={excessCoin.toFixed(8)} readOnly />
</div>
</div>
<br/>


<div className="form-group last">
<div className="a">
<span>Market Rate</span>
       <label className="switch">
  <input type="checkbox" id="rateToggle" />
  <span className="slider"></span>
</label>
<span id="toggleLabel">Limit</span>

</div>
</div>

<br/>
        <div className="actions">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button onClick={handleExecute} className="bg-yellow-500 px-4 py-2 rounded text-white">
            Execute Sell Trade
          </button>
        </div>




                </div>
            </div>
        </div>
        </>
    )
}

export default ExcessCoin;