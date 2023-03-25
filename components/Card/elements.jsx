import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: .5rem 1rem .5rem 1.5rem;
  border-radius: 12px;
  background: rgba(215, 208, 208, 0.5);
  border: 2px solid rgba(131, 134, 135, 0);
    
  :hover {
    background: rgba(100, 100, 100, 0.5);
    border: 2px solid rgba(2, 69, 251, .5);
  }
`;

export const StyledCardDes = styled.div`
  margin: 0;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 30ch;
`;