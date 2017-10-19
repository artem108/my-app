import styled, {css} from 'styled-components'

export const RevealPRight = styled.p `
position: relative;
height:5px;
&:after {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;

  transform-origin: left;
  transform: rotateY(90deg);

  transition: transform 4s;
}

${({ hide }) => hide && css `
&:after {
  transform: rotateY(0deg);
}
`}
`;
export const RevealPLeft = styled.p `
position: relative;
text-align: left;
height:5px;
&:after {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;

  transform-origin: left;
  transform: rotateY(0deg);

  transition: transform 4s;
}

${({ hide }) => hide && css `
&:after {
  transform: rotateY(90deg);
}
`}
`;
