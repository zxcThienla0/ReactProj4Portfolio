import './index.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/footer'

import ArgumentsCard from './components/main/agrumentsCard/agrumentsCard'
import { ways } from './components/main/agrumentsCard/argumentsData'
import Zagolovok from './components/main/zagolovok/zagolovok'
import DonarBlock from './components/main/donarBlock/donarBlock'
import Slider from './components/main/slider/slider'
import Facts from './components/main/facts/facts'

import FormInv from './components/form/formm'
import PriceList from './components/priceList/priceList'
import Catalog from './components/catalog/catalog'

import { useState } from 'react'

type Tab = 'main' | 'catalog' | 'formInv' | 'priceList'

type Current = 'main' | 'catalog' | 'formInv' | 'priceList'

export default function App() {
  const [tab, setTab] = useState<Tab>('main')

  return (
    <>
      <Header active={tab} onChange={(current) => setTab(current as any)} />
      <br /><br />

      {tab === 'main' && (
        <>
          <Zagolovok />
          <br /><br /><br />
          <div className='container'>
            <ArgumentsCard argument={ways[0]} />
            <ArgumentsCard argument={ways[1]} />
            <ArgumentsCard argument={ways[2]} />
          </div>
          <br /><br />
          <Facts />
          <br /><br />
          <Slider onChange={(current) => setTab(current as any)} />
          <br /><br />
          <DonarBlock />
        </>
      )}

      {tab === 'catalog' && <Catalog />}

      {tab === 'formInv' && <FormInv />}

      {tab === 'priceList' && <PriceList />}

      <Footer onChange={(current) => setTab(current as any)}/>
    </>
  )
}