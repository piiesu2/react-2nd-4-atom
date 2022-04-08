import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { children } = props;

  return (
    <>
      <SButton>{children}</SButton>
    </>
  );
};

const SButton = styled.button`
  background-color: #eebbaa;
`;
