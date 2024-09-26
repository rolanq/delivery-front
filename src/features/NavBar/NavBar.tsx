import { MenuOutlined } from '@ant-design/icons'

import { Header } from 'antd/es/layout/layout'
import styles from './styles.module.css'

export const NavBar = () => {
  return (
    <Header className={styles.container}>
        <MenuOutlined />
        {/* <LoadingOutlined /> */}
    </Header>
  )
}
