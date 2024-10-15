import React, { MutableRefObject } from 'react'

//Compoennts
import Image from 'next/image'

// Stores, utils, libs
import ArrowIcon from '@/public/ArrowIcon.svg'
import Notebook from '@/public/Notebook.png'
import { useMediaQuery } from 'usehooks-ts'
import { tabletBreakpoint } from '@/utils/breakpoints'

// CSS
import styles from '../page.module.sass'

type HowWeWorkBlockProps = {
  howWeWorkBlock: MutableRefObject<null>
}

function HowWeWorkBlock({ howWeWorkBlock }: HowWeWorkBlockProps) {
  const tablet = useMediaQuery(`(max-width: ${tabletBreakpoint}px)`)

  return (
    <section className={styles.home__howWeWorkBlock} ref={howWeWorkBlock}>
      <div className={styles.home__howWeWorkBlock__content}>
        <div className={styles.home__howWeWorkBlock__content__title}>
          <h1>Подробные{tablet ? <br /> : <></>} отчёты для вас и правообладателей</h1>
        </div>
        <ul className={styles.home__howWeWorkBlock__content__list}>
          <li className={styles.home__howWeWorkBlock__content__list__item}>
            <Image src={ArrowIcon} alt="arrow" />
            <p>
              Выручка, CTR, показы и другие
              <br /> показатели в реальном времени.
            </p>
          </li>
          <li className={styles.home__howWeWorkBlock__content__list__item}>
            <Image src={ArrowIcon} alt="arrow" />
            <p>Инструменты контроля качества трафика.</p>
          </li>
          <li className={styles.home__howWeWorkBlock__content__list__item}>
            <Image src={ArrowIcon} alt="arrow" />
            <p>
              Ежемесячные автоматические отчёты
              <br /> для каждого правообладателя.
            </p>
          </li>
        </ul>
        <button className={styles.home__howWeWorkBlock__content__button}>Заказать звонок</button>
      </div>
      {tablet ? (
        <div className={styles.home__howWeWorkBlock__imageContainer}>
          <Image src={Notebook} alt="notebook" className={styles.home__howWeWorkBlock__image} />
        </div>
      ) : (
        <Image src={Notebook} alt="notebook" className={styles.home__howWeWorkBlock__image} />
      )}
    </section>
  )
}

export default React.memo(HowWeWorkBlock)
