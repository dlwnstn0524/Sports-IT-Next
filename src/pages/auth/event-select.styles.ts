import styled from "styled-components";

interface BottomTextProps {
  count: number;
}

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 25%;
  padding-left: 18px;
`;

export const Text = styled.span`
  font-size: 35px;
  margin-bottom: 10px;
`;

export const SelectArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  height: 50%;
  padding: 10% 10px;
`;

export const BottomArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
`;

export const BottomText = styled.span<BottomTextProps>`
  /* color: #747474; */
  color: ${(props) => (props.count > 5 ? "#E05E6D" : "#747474")};
`;
