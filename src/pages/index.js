import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Menu from '@/components/Menu'
import Search from './Search'
import Gallery from './Gallery'
import React, { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import Announcement from './Announcement'
import AnnouncementsContextProvider from '@/context/AnnouncementsContext'


export default function Home() {
  
  return (
    <>
      <Head>
        <title>El bisne</title>
        <meta name="description" content="Generated by create next app by Frank Pérez Fleita" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <React.StrictMode>
        <AnnouncementsContextProvider>
          <main className={styles.main}>
            <Menu/>
            <Router>
              <Routes>
                <Route exact path='/' element={<Gallery />}/>
                <Route exact path='/Search' element={<Search/>} />
                <Route  path='/Announcement/:id' element={<Announcement />} />
              </Routes>
            </Router>
          </main>
        </AnnouncementsContextProvider>
      </React.StrictMode>
    </>
  )
}
