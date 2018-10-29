import styled from 'styled-components'
import { WHITE } from '../../styles/colors'

const Navbar = styled.div`
  width: 100%;
  background: ${WHITE};
  padding: 1rem 1.5rem;
  box-shadow: 4px 0 32px rgba(0, 0, 0, 0.3);
`

export const Nav = () => (
  <Navbar>
    This is the navbar
  </Navbar>
)
