import styled from "styled-components";
import { colorList, generateRandomColor } from "../children.style";

export const ChildFour = (props) => {
  const Wrapper = styled.div`
    background-color: ${colorList[generateRandomColor(colorList)]};
  `;
  return <Wrapper className="box">Child Four</Wrapper>;
};
