import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import { Button, LoadingDots, Text } from '@vercel/examples-ui'
import { ethers } from "ethers";

export default function Wallet() {
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

    const connectWallet = async () => {
        try {
          const { ethereum } = window;
          console.log(ethereum);
          if (!ethereum) {
            alert("Get MetaMask!");
            return;
          }
    
          const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    
          console.log("Connected", accounts[0]);
          setCurrentAccount(accounts[0]);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        checkIfWalletIsConnected();
      }, [])

    return (
        <>
                    {!currentAccount && (
                        <Button
                        size="md"
                        variant="primary"
                        onClick={connectWallet}
                        > Connect Wallet
                        </Button>
                    )}

                    {currentAccount && (
                        <Button
                        size="md"
                        variant="alert"
                        onClick={connectWallet}
                        > Connected as {currentAccount.substring(0, 5)}...{currentAccount.toUpperCase().substring(currentAccount.length - 4)}
                        </Button>
                    )}
        </>
    )
}