import React from 'react'

// Components
import Image from 'next/image'

// CSS
import styles from './Card.module.sass'

type CardProps = {
  icon: string
  title: string
  text: string
}

function Card({ icon, title, text }: CardProps) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Card
