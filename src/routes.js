import React from 'react'
import { Route } from 'react-router-dom'
import { styler } from 'utils/styler'

const styles = styler({
  home: {
    fontSize: 24,
    transition: 'font-size 100ms',
    '&:hover': {
      fontSize: 18,
    },
  },
})

const Routes = () => (
  <div>
    <div className={styles.home}>BOILERPLATE ACTIVATE 2!</div>
  </div>
)

export default Routes
