import React from 'react'

// Components
import Image from 'next/image'

// Stores, utils, libs
import ClickWaveCompany from '@/public/ClickWaveCompany.png'
import ZyphronixCompany from '@/public/ZyphronixCompany.png'
import NovasphereCompany from '@/public/NovasphereCompany.png'
import { useMediaQuery } from 'usehooks-ts'
import { mobileBreakpoint } from '@/utils/breakpoints'

// CSS
import styles from '../page.module.sass'

function PartnersBlock() {
  const mobile = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`)

  return (
    <section className={styles.home__partners}>
      <div className={styles.home__partners__content}>
        <h2 className={styles.home__partners__content__title}>Наши партнёры по монетизации</h2>
        <div className={styles.home__partners__content__items}>
          <Image
            src={ClickWaveCompany}
            alt="companyLogo"
            className={styles.home__partners__content__items__item}
          />
          {!mobile ? (
            <Image
              src={ZyphronixCompany}
              alt="companyLogo"
              className={styles.home__partners__content__items__item}
            />
          ) : (
            <Image
              src={NovasphereCompany}
              alt="companyLogo"
              className={styles.home__partners__content__items__item}
            />
          )}
          {!mobile ? (
            <Image
              src={NovasphereCompany}
              alt="companyLogo"
              className={styles.home__partners__content__items__item}
            />
          ) : (
            <Image
              src={ZyphronixCompany}
              alt="companyLogo"
              className={styles.home__partners__content__items__item}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default PartnersBlock
