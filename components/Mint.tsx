import React, { useEffect, useState } from "react";
import { Button, Text, LoadingDots } from '@vercel/examples-ui'
import Wallet from '../components/Wallet'
import GenerateArt from '../components/GenerateArt'

export default function Mint() {
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        /*
        * First make sure we have access to window.ethereum
        */
        try {
          const { ethereum } = window;
    
          if (!ethereum) {
            console.log("Make sure you have metamask!");
            return;
          } else {
            console.log("We have the ethereum object", ethereum);
          }
    
          const accounts = await ethereum.request({ method: "eth_accounts" });
    
          if (accounts.length != 0) {
            const account = accounts[0]
            console.log("Found an authorized account: ", account);
            setCurrentAccount(account)
          } else {
            console.log("No authorized account found")
          }
        } catch (error) {
          console.log(error)
        }
    }

    const mintNFT = async () => {
        alert("NFT Minted!");
    }

    useEffect(() => {
        checkIfWalletIsConnected();
      }, [])

  return (
    <>
        <Wallet/>
        {currentAccount && (
            <GenerateArt/>
        )}



        {currentAccount && (
            <Button size="md" onClick={mintNFT} variant="primary">Mint NFT</Button>
        )}
    </>
  )
}
