import styled from "styled-components";

const CVEntryDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 50px 2fr;
  border-block: 5px solid black;
  gap: 15px;
  height: 75%;
  width: 95%;
  border-block: 1px solid black;
  margin-block: 5px;
`;
// Styles a single entry (ie job or degree) in the CV

export { CVEntryDiv };
