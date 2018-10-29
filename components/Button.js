import styled from 'styled-components'

import { font } from './Text'
import { WHITE, PURPLE } from '../styles/colors'

export const PurpleButton = styled.button`
  text-transform: uppercase;
  font-size: 0.8em;
  border-radius: 1.5rem;
  padding: 1rem 1.75rem;
  color: ${WHITE};
  background: ${PURPLE};
  border: 0;
  font-family: ${font};
  letter-spacing: 1px;
`
