import React from 'react'
import styles from "../styles/Header.module.scss"

const Header = ({headerText}) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__text}>{headerText}</div>
      <div className={styles.header__line} />
    </div>
  )
}

export default Header
