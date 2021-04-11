import styled from "styled-components";
import { colorList, generateRandomColor } from "../children.style";

export const ChildOne = (props) => {
  const Wrapper = styled.div`
    background-color: ${colorList[generateRandomColor(colorList)]};
  `;
  return <Wrapper className="box">Child One</Wrapper>;
};
