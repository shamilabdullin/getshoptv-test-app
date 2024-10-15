import React, { MutableRefObject, SetStateAction } from 'react'

//Components
import Image from 'next/image'

// Stores, utils, libs
import classNames from 'classnames'
import Close from '@/public/Close.svg'

// CSS
import styles from '../page.module.sass'

type MenuProps = {
  isOpenMenu: boolean
  setIsOpenMenu: (value: SetStateAction<boolean>) => void
  visibleBlock: string
  setVisibleBlock: (value: SetStateAction<string>) => void
  scrollToElement: (ref: MutableRefObject<HTMLDivElement | null>) => void
  advantagesBlock: MutableRefObject<null>
  howWeWorkBlock: MutableRefObject<null>
}

function Menu({
  isOpenMenu,
  setIsOpenMenu,
  visibleBlock,
  scrollToElement,
  setVisibleBlock,
  advantagesBlock,
  howWeWorkBlock,
}: MenuProps) {
  return (
    <aside
      className={
        !isOpenMenu ? styles.home__menu : classNames(styles.home__menu, styles.home__menu__active)
      }
    >
      {' '}
      <button onClick={() => setIsOpenMenu((prev) => !prev)} className={styles.home__menu__burger}>
        <Image src={Close} alt="burger-menu" />
      </button>
      <ul className={styles.home__menu__list}>
        <li>
          <button
            className={
              visibleBlock === 'advantages'
                ? classNames(styles.home__menu__list__item, styles.home__menu__list__item__active)
                : styles.home__menu__list__item
            }
            onClick={() => {
              setVisibleBlock('advantages')
              scrollToElement(advantagesBlock)
            }}
          >
            Преимущества
          </button>
        </li>
        <li>
          <button
            className={
              visibleBlock === 'howWeWork'
                ? classNames(styles.home__menu__list__item, styles.home__menu__list__item__active)
                : styles.home__menu__list__item
            }
            onClick={() => {
              setVisibleBlock('howWeWork')
              scrollToElement(howWeWorkBlock)
            }}
          >
            Как мы работаем
          </button>
        </li>
      </ul>
    </aside>
  )
}

export default React.memo(Menu)
