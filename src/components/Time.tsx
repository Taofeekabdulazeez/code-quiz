import { MdAccessTime } from "react-icons/md";
import styled from "styled-components";

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
  return (
    <Center>
      <P>
        <MdAccessTime size={20} />
        Time Remaining
      </P>
      <FlexRol>
        <TextBox>14</TextBox>
        <Colon>:</Colon>
        <TextBox>05</TextBox>
      </FlexRol>
    </Center>
  );
}

export default Time;
