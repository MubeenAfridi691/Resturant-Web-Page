import React from 'react'
import Header from './components/Header'
import './App'
import Categories from './components/Categories'
import Topfoods from './components/Topfoods'
import Onlinedelivery from './components/Onlinedelivery'



 export default function App() {
  return (
    <div>
      <Header/>
      <Categories/>
      <Topfoods/>
      <Onlinedelivery/>

    </div>
  )
}
