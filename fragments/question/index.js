import { PurpleButton, TextWrapper} from '../../components'
import styled from 'styled-components'

const Maria = styled.img`
  margin-bottom: 1rem;
`

export const Question = ({ Question, QAnswerOptions, QName, SessionID, QID, handleSelect }) => (
  <div>
    {QName == "t1" ? (<Maria src="/static/img/maria.png" />) : null}

    <TextWrapper dangerouslySetInnerHTML={{__html: Question}} />

    <PurpleButton onClick={() => handleSelect({
      Answer: QAnswerOptions,
      SessionID,
      QID,
    })}>
      {QAnswerOptions}
    </PurpleButton>
  </div>
)
