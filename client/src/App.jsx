// App.js
import React, { useState } from "react";
import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";

function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [privateKey, setPrivateKey] = useState("");
  const [validPair, setValidPair] = useState(0);

  const handleValidPairChange = (newValue) => {
    setValidPair(newValue);
  };

  return (
    <div>
      <Wallet
        address={address}
        setAddress={setAddress}
        balance={balance}
        setBalance={setBalance}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
        setValidPair={handleValidPairChange}
      />
      <Transfer address={address} setBalance={setBalance} validPair={validPair} />
    </div>
  );
}

export default App;
