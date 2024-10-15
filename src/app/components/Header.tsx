import React, { MutableRefObject, SetStateAction } from 'react'

//Components
import Image from 'next/image'

// Stores, utils, libs
import Logo from '@/public/logo.svg'
import Burger from '@/public/Burger.svg'
import classNames from 'classnames'
import { useMediaQuery } from 'usehooks-ts'
import { tabletBreakpoint } from '@/utils/breakpoints'

// CSS
import styles from '../page.module.sass'

type HeaderProps = {
  setIsOpenMenu: (value: SetStateAction<boolean>) => void
  setVisibleBlock: (value: SetStateAction<string>) => void
  scrollToElement: (ref: MutableRefObject<HTMLDivElement | null>) => void
  advantagesBlock: MutableRefObject<null>
  visibleBlock: string
  howWeWorkBlock: MutableRefObject<null>
}

function Header({
  setIsOpenMenu,
  setVisibleBlock,
  scrollToElement,
  advantagesBlock,
  visibleBlock,
  howWeWorkBlock,
}: HeaderProps) {
  const tablet = useMediaQuery(`(max-width: ${tabletBreakpoint}px)`)

  return (
    <header className={styles.home__header}>
      <div className={styles.home__header__logo}>
        <Image src={Logo} alt="logo" />
      </div>
      <div className={styles.home__header__menu}>
        {tablet ? (
          <button
            onClick={() => setIsOpenMenu((prev) => !prev)}
            className={styles.home__header__menu__burger}
          >
            <Image src={Burger} alt="burger-menu" width={44} height={44} />
          </button>
        ) : (
          <>
            {' '}
            <button
              onClick={() => {
                setVisibleBlock('advantages')
                scrollToElement(advantagesBlock)
              }}
              className={
                visibleBlock === 'advantages'
                  ? classNames(
                      styles.home__header__menu__item,
                      styles.home__header__menu__item__active,
                    )
                  : styles.home__header__menu__item
              }
            >
              Преимущества
            </button>
            <button
              onClick={() => {
                setVisibleBlock('howWeWork')
                scrollToElement(howWeWorkBlock)
              }}
              className={
                visibleBlock === 'howWeWork'
                  ? classNames(
                      styles.home__header__menu__item,
                      styles.home__header__menu__item__active,
                    )
                  : styles.home__header__menu__item
              }
            >
              Как работаем
            </button>
          </>
        )}
      </div>
    </header>
  )
}

export default React.memo(Header)
