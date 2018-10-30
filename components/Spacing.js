import styled from 'styled-components'

const MEDIUM = '848px'
const LARGE = '1024px'

export const Container = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: ${({ paddingTop }) => paddingTop || '0'};

  @media screen and (min-width: ${MEDIUM}) {
    padding-left: 8%;
    padding-right: 8%;
  }

  @media screen and (min-width: ${LARGE}) {
    padding-left: 20%;
    padding-right: 20%;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
`

export const Col = styled.div`
  flex: 1;
`
