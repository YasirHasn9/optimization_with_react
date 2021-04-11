import styled from "styled-components";
import { colorList, generateRandomColor } from "../children.style";

export const ChildFive = (props) => {
  const Wrapper = styled.div`
    background-color: ${colorList[generateRandomColor(colorList)]};
  `;
  return <Wrapper className="box">Child Five</Wrapper>;
};
