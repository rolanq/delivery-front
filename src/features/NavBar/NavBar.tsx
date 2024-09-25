import { LoadingOutlined, MenuOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import styles from './styles.module.css'

export const NavBar = () => {
  return (
    <Header className={styles.container}>
        <MenuOutlined />
        <LoadingOutlined />
    </Header>
  )
}
