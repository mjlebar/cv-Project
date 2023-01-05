import styled from "styled-components";

const CVEntryDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 50px 2fr;
  border-block: 5px solid black;
  width: 80%;
  gap: 15px;
  height: 75%;
  border-block: 1px solid black;
  margin-block: 5px;
`;
// Styles a single entry (ie job or degree) in the CV

export { CVEntryDiv };
