import React, { useState } from 'react'

// Stores, utils, libs
import classNames from 'classnames'
import { useMediaQuery } from 'usehooks-ts'
import { mobileBreakpoint } from '@/utils/breakpoints'

// CSS
import styles from '../page.module.sass'

function SourcesBlock() {
  const mobile = useMediaQuery(`(max-width: ${mobileBreakpoint}px)`)

  const [source, setSource] = useState('operators')

  const handleSource = (source: string) => {
    setSource(source)
  }

  return (
    <section className={styles.home__sources}>
      <div>
        <h1>
          Дополнительные источники
          {!mobile ? <br /> : <></>} выручки для разных
          {!mobile ? <br /> : <></>} компаний
        </h1>
      </div>
      <div className={styles.home__sources__menu}>
        <div className={styles.home__sources__menu__buttons}>
          <button
            onClick={() => handleSource('operators')}
            className={
              source === 'operators'
                ? classNames(
                    styles.home__sources__menu__buttons__item,
                    styles.home__sources__menu__buttons__itemActive,
                  )
                : styles.home__sources__menu__buttons__item
            }
          >
            Операторам
          </button>
          <button
            onClick={() => handleSource('services')}
            className={
              source === 'services'
                ? classNames(
                    styles.home__sources__menu__buttons__item,
                    styles.home__sources__menu__buttons__itemActive,
                  )
                : styles.home__sources__menu__buttons__item
            }
          >
            ОТТ сервисам
          </button>
        </div>
        <div>
          {source === 'operators' ? (
            <p>
              Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой
              рекламной монетизации
            </p>
          ) : source === 'services' ? (
            <p>Дополнительные возможности обогащения данных об аудитории и монетизации</p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  )
}

export default SourcesBlock
