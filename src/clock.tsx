import * as React from 'react'
import styles from './styles.module.css'

interface Props {
    hours: number,
    minutes: number
  }

const Clock = ({ hours, minutes }: Props) => {
    return (
    <div className={styles.clock}>
            {hours}:{minutes}
    </div>
    )
}

export default Clock