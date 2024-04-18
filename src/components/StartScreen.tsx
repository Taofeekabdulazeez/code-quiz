import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeUser } from "../features/userSlice";
import styled from "styled-components";

import { Button } from "../ui/Button";
import { startQuiz } from "../features/quizSlice";

const StyledStartScreen = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 4rem;
  font-weight: 600;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  margin-right: 1rem;
  color: var(--color-text);
  line-height: 1.6;
`;

const Input = styled.input`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 1.8rem;
  border-radius: 23px;
  outline: none;
  background-color: var(--color-bg-700);
  border: 0.2rem solid #333;

  &:focus {
    border: 0.2rem solid var(--color-primary);
  }
`;

const FlexCol = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
`;

function StartScreen() {
  const [name, setName] = useState("Taofeek");
  const [email, setEmail] = useState("tao@mail.com");
  const dispatch = useDispatch();

  const handleStartQuiz = function () {
    if (!name || !email) return;
    dispatch(storeUser({ name, email }));
    dispatch(startQuiz());
  };

  return (
    <StyledStartScreen>
      <Heading>Let's start</Heading>
      <FlexCol>
        <div>
          <Label>Name</Label>
          <Input
            type="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </FlexCol>
      <Button onClick={handleStartQuiz}>Start Quiz</Button>
    </StyledStartScreen>
  );
}

export default StartScreen;
