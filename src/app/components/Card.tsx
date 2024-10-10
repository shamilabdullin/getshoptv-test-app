import React from 'react'
import styles from './Card.module.sass'
import Image from 'next/image'

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
