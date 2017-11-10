import styled, {css} from 'styled-components'

export const Title = styled.h1 `
  margin-top: 0;
  font-size: 3em;
  color: red;
  text-align: left;
  cursor: pointer;
`;

export const ImageText = styled.h2 `
  text-align: center;
  font-size: 1em;
`;
export const SocialLinks = styled.div `
  position: fixed;
  bottom: 60px;
  left: 40px;
`;
export const SocialDiv = styled.div `
  color: red;
  align-content: center;
  font-weight: bold;
  display: flex;
  font-size: 1.5em;
  transition: color .3s;
  z-index: 99;
  transform: rotate(-90deg);
  transform-origin: left top;
`;

export const StyleText = styled.p `
  font-size: 2em;
  text-align: left;
`;
export const HomeImg = styled.section `
  width: 100%;
  height: 700px;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 3em;
`;

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
