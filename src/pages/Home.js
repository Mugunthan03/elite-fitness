import React from 'react'
import Banner from './Banner'
import Offer from '../components/Offer'
import Choose from '../components/Choose'
import BMICalculator from '../components/BMICalculator'
import Features from '../components/Features'


const Home = () => {
  return (
    <div>
     
      <Banner />
      <Features />
      <Choose />
      <Offer />      
      <BMICalculator />
    </div>
  )
}

export default Home