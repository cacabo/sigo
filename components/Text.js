import styled from 'styled-components'
import { DARK_GRAY } from '../styles/colors'

export const font = "'Comfortaa', s-apple-system, BlinkMacSystemFont, Roboto, Arial, 'Helvetica Neue', Helvetica, sans-serif"

export const Text = styled.p`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  line-height: 1.25;
  color: ${DARK_GRAY};
`

export const BigText = styled.p`
  font-size: 1.8em;
  color: ${DARK_GRAY};
  line-height: 1.5;
  font-family: ${font};
`

export const Header = styled.h2`
  font-weight: normal;
  display: inline-block;
  line-height: ${({ lineHeight }) => lineHeight || 1.5};
  margin: ${({ margin }) => margin || inherit};
  vertical-align: top;
  color: ${DARK_GRAY};
  font-family: ${font};
`

export const TextWrapper = styled.div`
  font-size: 1.8em;
  color: ${DARK_GRAY};
  line-height: 1.5;
  font-family: ${font};
`
