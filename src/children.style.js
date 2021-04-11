import styled from "styled-components";

export const colorList = [
  "#DB4437",
  "#F4B400",
  "#0F9D58",
  "#4285F4",
  "#2FCCCC",
  "#B51BA8",
  "#BFB78E",
  "#2C9E4D",
];

export const generateRandomColor = (colors) => {
  let color = Math.ceil(Math.random() * colors.length);
  return color - 1;
};
export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Box = styled.div`
  width: 18%;
  height: 250px;
  border: 1px solid #eee;
`;
