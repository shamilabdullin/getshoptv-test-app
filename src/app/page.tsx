'use client'
import { MutableRefObject, useState } from 'react'

//Components
import Header from './components/Header'
import MainBlock from './components/MainBlock'
import SourcesBlock from './components/SourcesBlock'
import PromotionBlock from './components/PromotionBlock'
import PartnersBlock from './components/PartnersBlock'

// Stores, utils, libs
import { useObserver } from '../hooks/useObserver'

//CSS
import styles from './page.module.sass'
import HowWeWorkBlock from './components/HowWeWorkBlock'
import FormBlock from './components/FormBlock'
import Menu from './components/Menu'

export default function Home() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const { advantagesBlock, howWeWorkBlock, mainBlock, visibleBlock, setVisibleBlock } =
    useObserver()

  const scrollToElement = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <main className={styles.home}>
      <Header
        advantagesBlock={advantagesBlock}
        howWeWorkBlock={howWeWorkBlock}
        scrollToElement={scrollToElement}
        setIsOpenMenu={setIsOpenMenu}
        setVisibleBlock={setVisibleBlock}
        visibleBlock={visibleBlock}
      />
      <MainBlock mainBlock={mainBlock} />
      <SourcesBlock />
      <PromotionBlock advantagesBlock={advantagesBlock} />
      <PartnersBlock />
      <HowWeWorkBlock howWeWorkBlock={howWeWorkBlock} />
      <FormBlock />
      <Menu
        advantagesBlock={advantagesBlock}
        howWeWorkBlock={howWeWorkBlock}
        isOpenMenu={isOpenMenu}
        scrollToElement={scrollToElement}
        setIsOpenMenu={setIsOpenMenu}
        setVisibleBlock={setVisibleBlock}
        visibleBlock={visibleBlock}
      />
    </main>
  )
}
