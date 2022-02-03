import { useState, useEffect } from 'react';
import Web3 from 'web3';
import logo from './logo.svg';
import './App.css';

function App() {

  const [account, setAccount] = useState(0);

  useEffect(() => {
    const load = async() => {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
    }
    
    load();
   }, []);

  return (
    <div className="App">
      Your account is {account}.
    </div>
  );
}

export default App;
