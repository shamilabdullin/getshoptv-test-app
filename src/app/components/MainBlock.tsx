import React, { MutableRefObject } from 'react'

//CSS
import styles from '../page.module.sass'

type MainBlock = {
  mainBlock: MutableRefObject<null>
}

function MainBlock({ mainBlock }: MainBlock) {
  return (
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
  )
}

export default React.memo(MainBlock)
