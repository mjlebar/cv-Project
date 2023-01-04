import styled from "styled-components";

const FormSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 8px double black;
  border-radius: 8px;
  padding: 15px;
  margin-block: 25px;
  margin-inline: 10px;
  width: 80%;
  background-color: #ece8dd;
`;
// the styling for a section of the input, ie education section or contact section. Aligns it, sets borders, and gives it a gentle coloring to visually distinguish from the rest of the page

export { FormSectionDiv };
