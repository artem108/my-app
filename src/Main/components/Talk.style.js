import styled from 'styled-components'

export const Title = styled.h1 `
  margin-top: 0;
  font-size: 3em;
  color: red;
  text-align: left;
`;
export const Text = styled.p `
  margin-top: 0;
  font-size: 2em;
  text-align: left;
`;
export const ChillImg = styled.section `
background-image: url(../../img/chill.png);
`;

// export const H2 = styled.h2 `
// margin-top: 0;
// font-size: 2em;
// text-align: left;
// `;
export const [H1, H2, H3, H4, H5, P, Blockquote, Code ] = ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'blockquote', 'code']
.map((tag) => styled[tag]`
    ${({ align }) => align && `text-align: ${align};`}
`)
