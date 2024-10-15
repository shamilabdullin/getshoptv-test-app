import React, { MutableRefObject } from 'react'

//Components
import Card from './Card'
import Image from 'next/image'

// Stores, utils, libs
import ArrowIcon from '@/public/ArrowIcon.svg'
import LeftLineOrange from '@/public/LeftLineOrange.png'
import TopLine from '@/public/TopLine.svg'
import SquareOrange from '@/public/SquareOrange.png'
import RightLineOrange from '@/public/RightLineOrange.png'
import BottomLine from '@/public/BottomLine.svg'
import { useMediaQuery } from 'usehooks-ts'
import { mobileBreakpoint, tabletBreakpoint } from '@/utils/breakpoints'

// CSS
import styles from '../page.module.sass'

type PromotionBlockProps = {
  advantagesBlock: MutableRefObject<null>
}

function PromotionBlock({ advantagesBlock }: PromotionBlockProps) {
  const tablet = useMediaQuery(`(max-width: ${tabletBreakpoint}px)`)
  const mobile = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`)

  return (
    <section className={styles.home__promotion} ref={advantagesBlock}>
      <h1 className={styles.home__promotion__title}>
        Баланс между выручкой и удовлетворённостью пользователей
      </h1>
      <div className={styles.home__promotion__main}>
        <Card
          icon={ArrowIcon}
          title="Частотность под контролем"
          text="Чтобы не ронять NPS и не увеличивать отток пользователей"
        />
        <div className={styles.home__promotion__main__image}>
          <div className={styles.home__promotion__main__image__rightLine}>
            <Image
              src={!mobile ? LeftLineOrange : TopLine}
              alt="arrow"
              className={styles.home__promotion__main__image__leftLine}
            />
          </div>
          <Image
            src={SquareOrange}
            alt="square"
            width={tablet ? 80 : 120}
            height={tablet ? 80 : 120}
          />
          <div className={styles.home__promotion__main__image__rightLine}>
            <Image
              src={!mobile ? RightLineOrange : BottomLine}
              alt="arrow"
              className={styles.home__promotion__main__image__rightLine}
            />
          </div>
        </div>
        <Card
          icon={ArrowIcon}
          title="Максимальная выручка"
          text="За счёт заполенения всех рекламных мест по высокой цене"
        />
      </div>
    </section>
  )
}

export default React.memo(PromotionBlock)
