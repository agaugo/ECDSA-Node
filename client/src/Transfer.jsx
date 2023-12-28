import { useState } from "react";
import server from "./server";

function Transfer({ address, setBalance, validPair}) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try 
	{
		if (validPair === 1 && sendAmount > 0 && recipient != address) {
      const 
	  {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });
		console.log("Funds transferred!");
		setBalance(balance);
	}
	if (validPair === 0){
		console.log("Illegal Transaction: Invalid Pair");
	}
	if (recipient === address){
		console.log("Illegal Transaction: Self Transfer");
	}
    }
	catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;