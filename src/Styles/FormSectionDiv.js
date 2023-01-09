import styled from "styled-components";

const FormSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  padding: 10px;
  border-block: 1px solid black;
  gap: 5px;
  margin: 2px;
  max-height: 450px;
`;
// the styling for a section of the input, ie education section or contact section. Aligns it, sets borders, and gives it a gentle coloring to visually distinguish from the rest of the page

export { FormSectionDiv };
