import { useEffect, useState } from "react";
import { MdAccessTime } from "react-icons/md";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { submit } from "../features/quizSlice";
import { useNavigate } from "react-router-dom";

const FlexRol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

const TextBox = styled.span`
  color: var(--color-text);
  font-size: 2.4rem;
  font-weight: 600;
  width: 4.8rem;
  aspect-ratio: 1 /1;
  border-radius: 7px;
  background-color: var(--color-bg-900);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  /* margin: 0 auto; */
  margin-bottom: 2.4rem;
`;

const Colon = styled.span`
  color: var(--color-text);
  font-size: 2.4rem;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  color: var(--color-text);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`;

function Time() {
  const qTime = useAppSelector((state) => state.quiz.time);
  const [time, setTime] = useState<number | null>(qTime);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (time === 0) {
        dispatch(submit());
        navigate("/finish");
        return;
      }
      // eslint-disable-next-line prefer-const
      const id = setInterval(function () {
        setTime((time) => (typeof time === "number" ? time - 1 : time));
      }, 1000);
      return () => clearInterval(id);
    },
    [time, dispatch, navigate]
  );

  if (!time) return null;

  return (
    <Center>
      <P>
        <MdAccessTime size={20} />
        Time Remaining
      </P>
      <FlexRol>
        <TextBox>{String(Math.trunc(time / 60)).padStart(2, "0")}</TextBox>
        <Colon>:</Colon>
        <TextBox>{String(time % 60).padStart(2, "0")}</TextBox>
      </FlexRol>
    </Center>
  );
}

export default Time;
