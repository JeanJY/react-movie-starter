//암호화페들과 그가격을 나열하는 기능 구현해보기
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCryptos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Prices {loading ? "" : `(${cryptos.length})`}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <select>
          {cryptos.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name} ({crypto.symbol}): ${crypto.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
