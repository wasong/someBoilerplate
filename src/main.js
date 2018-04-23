import React from 'react'
import { render } from 'react-dom'
import FastClick from 'fastclick'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body)

injectTapEventPlugin() // remove on official React version

const mount = document.getElementById('root')

render(<App />, mount)
