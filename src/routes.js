import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { cx } from 'emotion'
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
  underline: {
    fontWeight: 'bold',
  },
})

const Routes = () => (
  <Router>
    <div
      className={cx(
        styles.home,
        { [styles.underline]: true },
      )}
    >
      Emotion
    </div>
  </Router>
)

export default Routes
