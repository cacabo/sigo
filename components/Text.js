import styled from 'styled-components'
import { DARK_GRAY } from '../styles/colors'

export const font = "'Comfortaa', s-apple-system, BlinkMacSystemFont, Roboto, Arial, 'Helvetica Neue', Helvetica, sans-serif"

export const Text = styled.p`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  line-height: 1.25;
`

export const BigText = styled.p`
  font-size: 1.8em;
  color: ${DARK_GRAY};
  line-height: 1.5;
  font-family: ${font};
`
