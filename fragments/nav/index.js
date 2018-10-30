import styled from 'styled-components'
import { WHITE, GRAY, DARK_GRAY } from '../../styles/colors'
import { Header } from '../../components'

const NAV_HEIGHT = '2.5rem'

const Navbar = styled.div`
  width: 100%;
  background: ${WHITE};
  padding: 1rem;
  box-shadow: 4px 0 32px rgba(0, 0, 0, 0.3);
`

const Logo = styled.img`
  height: ${NAV_HEIGHT};
  width: auto;
`

const Bar = styled.div`
  height: ${NAV_HEIGHT};
  width: 2px;
  display: inline-block;
  background: ${GRAY};
  margin: 0 2rem;
`

// const NavText = styled.h2`
//   font-weight: normal;
//   display: inline-block;
//   line-height: ${NAV_HEIGHT};
//   margin: 0;
//   vertical-align: top;
//   color: ${DARK_GRAY};
// `

export const Nav = () => (
  <Navbar>
    <Logo src="/static/img/logo.png" />
    <Bar />
    <Header margin="0.2rem 0 0 0" lineHeight={NAV_HEIGHT}>
      Get a quote
    </Header>
  </Navbar>
)
