import styled from 'styled-components'
import { Container, Text } from '../../components'

const FooterWrapper = styled.div`
  width: 100%;
  background-image: url(/static/img/footer.png);
  padding: 4rem 0rem;
`

export const Footer = () => (
  <FooterWrapper>
    <Container>
      <Text center>
        &copy; 2018 sigoinsurance.com. All Rights Reserved.
      </Text>
    </Container>
  </FooterWrapper>
)
