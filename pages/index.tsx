import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import logoImage from '../public/nft-logo.png'
import styles from '../styles/Home.module.css'
import Mint from '../components/Mint'
import Wallet from '../components/Wallet'
import GenerateArt from '../components/GenerateArt'
import { checkIfWalletIsConnected } from '../components/Wallet'

import { Button, Text, LoadingDots } from '@vercel/examples-ui'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT Generator</title>
        <meta name="description" content="NFT Generator with support of Stable Diffusion AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <section className="flex flex-col gap-6">
          <Image src={logoImage} width={100} height={110}/>
            <Text variant="h1">
              NFT Generator
            </Text>

            <Text>
              This is an NFT Generator application with support of Stable Diffusion AI to generator digital arts<br/> and deployment to blockchain.
            </Text>
            <hr className="border-t border-accents-2 my-6" />
            <Mint/>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
