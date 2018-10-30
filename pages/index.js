import fetch from 'isomorphic-unfetch'
import { Component } from 'react'

import { Layout, Question } from '../fragments'
import { Container } from '../components'

class NewQuote extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  async handleSelect(qData) {
    const data = {
      json: JSON.stringify(qData)
    }

    console.log(data)

    const res = await fetch('http://localhost:8080/updatesession', {
      method: 'POST',
      data,
    })

    console.log(res)

    const resData = await res.json()

    console.log(resData)
  }

  render() {
    return (
      <Layout>
        <Container paddingTop="6vw">
          <Question
            handleSelect={this.handleSelect}
            {...this.props}
          />
        </Container>
      </Layout>
    )
  }
}

NewQuote.getInitialProps = async function() {
  const res = await fetch('http://localhost:8080/createsession?langid=test2', {
    method: 'POST',
  })

  const data = await res.json()

  return data
}

export default NewQuote
