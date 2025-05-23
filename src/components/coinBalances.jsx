import '../App.css';

const BlockGrid = ({ icon, name, change, changeType, balance, rate, exchangeAmount, onExchange  }) => {

 
  return (


   <>

 
     <div className="block-grid">
      <div className="top">
        <div className='tr'>
          <img src={icon} alt={name} />
          <p>{name}</p>
        </div>
        <div className={`rr ${changeType}`}>
          <i className={`fas ${changeType === 'success' ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
          {change+"%"}
        </div>
      </div>

      <div className="bal">
        <p className='bal'>Balance</p>
        <h3>{balance +" "+ name}</h3>
      </div>

      <div className="bal a">
        <p className='bal'>Current Rate</p>
        <h3>{"US $"+rate}</h3>
      </div>

      <div className="ex">
        <div className="text">Excess Coin: {exchangeAmount+" "+name}</div>
        <div className="btn">
          <button onClick={onExchange}>Exchange Coin</button>
        </div>
      </div>
    </div>
    </>
  );
  
}


export default BlockGrid;