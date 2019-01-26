import { css } from 'emotion'

export const styler = (styles) => {
  const wrappedStyles = {}

  Object.entries(styles).forEach(([name, value]) => {
    wrappedStyles[name] = css`${value}`
  })

  return wrappedStyles
}

export const treeShake = () => ({ hello: 'world' })
