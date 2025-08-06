import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/footer'

import FormInv from './components/form/formm'
import PriceList from './components/priceList/priceList'
import Catalog from './components/catalog/catalog'
import HomePage from './components/main/homePage/homePage';


export default function App() {
  return (
    <>
      <Router basename='/ReactProj4Portfolio'>
        <Header />
        <br /><br />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Info" element={<Catalog />} />
          <Route path="/FormInv" element={<FormInv />} />
          <Route path="/PriceList" element={<PriceList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}