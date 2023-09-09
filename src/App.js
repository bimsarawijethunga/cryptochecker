import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Coin from './components/coin';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect (()=> {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then( res=>{
      setCoins(res.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="App">
      <div className='coin-search'>
        <h1 className='coin-text'>Welcome</h1>
        <h3 className='coin-text'>Check The Crypto Market</h3>
        <p className='attribution'>All data is received from <a href="https://www.coingecko.com">www.coingecko.com</a></p>
        <form>
          <input type="text" placeholder='Search' className='coin-input' onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key = {coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          price={coin.current_price}
          volume={coin.total_volume}
          priceChange={coin.price_change_percentage_24h}
          marketCap={coin.market_cap} />
        )
      })}
    </div>
  );
}

export default App;
