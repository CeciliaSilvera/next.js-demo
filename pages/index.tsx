import type { NextPage } from 'next'
import React from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

type LinkProps = {
  href: string;
  className: string;
  heading: string;
  imgSrc: string;
  altText: string;
}

function CustomLink({href, className, heading, imgSrc, altText}: LinkProps): JSX.Element {
  return (            
  <a href={href} className={className} >
    <h2>{heading} &rarr;</h2>
    <Image src={imgSrc} alt={altText} width={200} height={100}/>
  </a>
  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Demo</title>
        <meta name="description" content="Demo application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        <a href="https://nextjs.org">Next.js</a> Demo
        </h1>

        <p className={styles.description}>
          by{' '}
          <code className={styles.code}>Cecilia Silvera</code>
        </p>

        <div className={styles.grid}>
            <CustomLink 
              heading='Company details' 
              href='/provideit' 
              className={styles.card} 
              imgSrc="/provideit_logo_green.svg"
              altText="Provideit Logo" />
            <CustomLink 
              heading='In cooperation with' 
              href='/nox' 
              className={styles.card} 
              imgSrc="/nox-consulting-logo.png"
              altText="NOX Logo" />
        </div>
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

export default Home
