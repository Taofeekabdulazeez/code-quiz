import { useQuiz } from "../contexts/QuizContext";
import Option from "./Option";
import styled from "styled-components";

const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  display: block;
  text-transform: uppercase;
  margin-bottom: 2.4rem;
`;

const StyledQuestion = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 3rem;
`;

const List = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style: none;
`;

function Question() {
  const { questions, index = 0 } = useQuiz();
  let question;
  if (questions && index >= 0) question = questions[index];

  return (
    <div>
      <Span>
        Question {index + 1} of {questions?.length}
      </Span>
      <StyledQuestion>{question?.question}</StyledQuestion>
      <List>
        {question?.options.map((option, i) => (
          <Option key={option} optIndex={i}>
            {option}
          </Option>
        ))}
      </List>
    </div>
  );
}

export default Question;
