import React from 'react'
import { Route } from 'react-router-dom'
import { styler } from 'utils/styler'

const styles = styler({
  home: {
    fontSize: ['1rem', '1em', 20],
    transition: 'font-size 100ms',
    '&:hover': {
      fontSize: ['1rem', '1em', 18],
    },
    '@media (max-width: 768px)': {
      color: 'red',
    },
  },
})

const Routes = () => (
  <div>
    <div className={styles.home}>Emotion</div>
  </div>
)

export default Routes
