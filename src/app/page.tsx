'use client'

import Image from 'next/image'
import styles from './page.module.sass'
import Logo from '@/public/logo.svg'
import { useState } from 'react'
import classNames from 'classnames'

export default function Home() {
  const [source, setSource] = useState('operators')

  const handleSource = (source: string) => {
    setSource(source)
  }

  return (
    <div className={styles.home}>
      <header className={styles.home__header}>
        <div className={styles.home__header__logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={styles.home__header__menu}>
          <button className={styles.home__header__menu__item}>Преимущества</button>
          <button className={styles.home__header__menu__item}>Как работаем</button>
        </div>
      </header>
      <section className={styles.home__main}>
        <h1>Монетизируйте клиентскую базу, не снижая NPS</h1>
        <h2>
          Найдите идеальный баланс выручки
          <br />
          и удовлетворённости пользователей с платформой
          <br /> рекламной монетизации
        </h2>
        <button className={styles.home__main__action}>Заказать звонок</button>
      </section>
      <section className={styles.home__sources}>
        <div>
          <h1>
            Дополнительные источники
            <br /> выручки для разных
            <br /> компаний
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
      <section className={styles.home__promotion}>
        <h1 className={styles.home__promotion__title}>
          Баланс между выручкой и удовлетворённостью пользователей
        </h1>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  )
}
