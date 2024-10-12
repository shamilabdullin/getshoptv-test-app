'use client'

import Image from 'next/image'
import styles from './page.module.sass'
import Logo from '@/public/logo.svg'
import { ChangeEvent, MutableRefObject, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Card from './components/Card'
import ArrowIcon from '@/public/ArrowIcon.svg'
import SquareOrange from '@/public/SquareOrange.png'
import LeftLineOrange from '@/public/LeftLineOrange.png'
import RightLineOrange from '@/public/RightLineOrange.png'
import ClickWaveCompany from '@/public/ClickWaveCompany.png'
import ZyphronixCompany from '@/public/ZyphronixCompany.png'
import NovasphereCompany from '@/public/NovasphereCompany.png'
import Notebook from '@/public/Notebook.png'

export default function Home() {
  const [source, setSource] = useState('operators')

  const advantagesBlock = useRef(null)
  const howWeWorkBlock = useRef(null)
  const mainBlock = useRef(null)
  const [visibleBlock, setVisibleBlock] = useState('')
  const [isCorrectEmail, setIsCorrectEmail] = useState(true)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const howWeWorkObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleBlock('howWeWork')
    })

    const advantagesObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleBlock('advantages')
    })

    const mainBlockObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisibleBlock('')
    })

    const main = mainBlock.current
    if (main) mainBlockObserver.observe(main)

    const howWeWork = howWeWorkBlock.current
    if (howWeWork) howWeWorkObserver.observe(howWeWork)

    const advantages = advantagesBlock.current
    if (advantages) advantagesObserver.observe(advantages)

    return () => {
      if (howWeWork) howWeWorkObserver.unobserve(howWeWork)
      if (advantages) advantagesObserver.unobserve(advantages)
    }
  }, [])

  const handleSource = (source: string) => {
    setSource(source)
  }

  const scrollToElement = (ref: MutableRefObject<HTMLDivElement | null>) => {
    if (ref.current !== null) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleValidateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsCorrectEmail(emailRegex.test(e.target.value) || !e.target.value)
    setEmail(e.target.value)
  }

  return (
    <div className={styles.home}>
      <header className={styles.home__header}>
        <div className={styles.home__header__logo}>
          <Image src={Logo} alt="logo" />
        </div>
        <div className={styles.home__header__menu}>
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
        </div>
      </header>
      <section className={styles.home__main} ref={mainBlock}>
        <h1>
          Монетизируйте клиентскую
          <br /> базу, не снижая NPS
        </h1>
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
            <Image
              src={LeftLineOrange}
              alt=""
              className={styles.home__promotion__main__image__leftLine}
            />
            {/* <div style={{ height: '100%', width: '100%' }}> */}
            <Image src={SquareOrange} alt="" />
            {/* </div> */}
            <Image src={RightLineOrange} alt="" />
          </div>
          <Card
            icon={ArrowIcon}
            title="Максимальная выручка"
            text="За счёт заполенения всех рекламных мест по высокой цене"
          />
        </div>
      </section>
      <section className={styles.home__partners}>
        <div className={styles.home__partners__content}>
          <h2>Наши партнёры по монетизации</h2>
          <div className={styles.home__partners__content__items}>
            <Image src={ClickWaveCompany} alt="" />
            <Image src={ZyphronixCompany} alt="" />
            <Image src={NovasphereCompany} alt="" />
          </div>
        </div>
      </section>
      <section className={styles.home__section5} ref={howWeWorkBlock}>
        <div className={styles.home__section5__content}>
          <div className={styles.home__section5__content__title}>
            <h1>
              Подробные отчёты для вас и <br /> правообладателей
            </h1>
          </div>
          <ul className={styles.home__section5__content__list}>
            <li className={styles.home__section5__content__list__item}>
              <Image src={ArrowIcon} alt="" />
              <p>
                Выручка, CTR, показы и другие
                <br /> показатели в реальном времени.
              </p>
            </li>
            <li className={styles.home__section5__content__list__item}>
              <Image src={ArrowIcon} alt="" />
              <p>Инструменты контроля качества трафика.</p>
            </li>
            <li className={styles.home__section5__content__list__item}>
              <Image src={ArrowIcon} alt="" />
              <p>
                Ежемесячные автоматические отчёты
                <br /> для каждого правообладателя.
              </p>
            </li>
          </ul>
          <button className={styles.home__section5__content__button}>Заказать звонок</button>
        </div>
        <div className={styles.home__section5__image}>
          <Image src={Notebook} alt="" />
        </div>
      </section>
      <section className={styles.home__section6}>
        <h1 className={styles.home__section6__title}>Заполните форму</h1>
        <div className={styles.home__section6__form}>
          <div className={styles.home__section6__form__start}>
            <textarea
              name=""
              id=""
              placeholder="Напишите свой вопрос"
              className={styles.home__section6__form__start__input}
            ></textarea>
          </div>
          <div className={styles.home__section6__form__end}>
            <div className={styles.home__section6__form__end__password}>
              <input
                type="text"
                placeholder="Введите e-mail"
                value={email}
                className={
                  isCorrectEmail
                    ? styles.home__section6__form__end__input
                    : styles.home__section6__form__end__input__error
                }
                onChange={(e) => handleValidateEmail(e)}
              />
              {isCorrectEmail ? (
                <></>
              ) : (
                <p className={styles.home__section6__form__end__password__helper}>
                  Неправильно указана почта
                </p>
              )}
            </div>
            <div className={styles.home__section6__form__end__checkbox}>
              <input type="checkbox" style={{ marginTop: '4px', backgroundColor: 'red' }} />
              <p>
                Я ознакомлен(а) с <u>политикой конфиденциальности</u> и согласен(на) на обработку
                <u>персональных данных.</u>
              </p>
            </div>
            <button className={styles.home__section6__form__end__button}>Отправить</button>
          </div>
        </div>
      </section>
    </div>
  )
}
