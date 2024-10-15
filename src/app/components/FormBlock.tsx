import React, { ChangeEvent, useState } from 'react'

// CSS
import styles from '../page.module.sass'

function FormBlock() {
  const [isCorrectEmail, setIsCorrectEmail] = useState(true)
  const [email, setEmail] = useState('')

  const handleValidateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setIsCorrectEmail(emailRegex.test(e.target.value) || !e.target.value)
    setEmail(e.target.value)
  }

  return (
    <section className={styles.home__formBlock}>
      <h1 className={styles.home__formBlock__title}>Заполните форму</h1>
      <div className={styles.home__formBlock__form}>
        <div className={styles.home__formBlock__form__start}>
          <textarea
            name=""
            id=""
            placeholder="Напишите свой вопрос"
            className={styles.home__formBlock__form__start__input}
          ></textarea>
        </div>
        <div className={styles.home__formBlock__form__end}>
          <div className={styles.home__formBlock__form__end__password}>
            <input
              type="text"
              placeholder="Введите e-mail"
              value={email}
              className={
                isCorrectEmail
                  ? styles.home__formBlock__form__end__input
                  : styles.home__formBlock__form__end__input__error
              }
              onChange={(e) => handleValidateEmail(e)}
            />
            {isCorrectEmail ? (
              <></>
            ) : (
              <p className={styles.home__formBlock__form__end__password__helper}>
                Неправильно указана почта
              </p>
            )}
          </div>
          <div className={styles.home__formBlock__form__end__checkbox}>
            <input type="checkbox" style={{ marginTop: '4px', backgroundColor: 'red' }} />
            <p>
              Я ознакомлен(а) с <u>политикой конфиденциальности</u> и согласен(на) на обработку
              <u>персональных данных.</u>
            </p>
          </div>
          <button className={styles.home__formBlock__form__end__button}>Отправить</button>
        </div>
      </div>
    </section>
  )
}

export default FormBlock
