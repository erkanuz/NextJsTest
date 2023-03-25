import { forwardRef } from "react";
import styled from "styled-components";

export const StyledSectionTitles = styled.div`
    display: grid;
    place-items: center;
    font-size: x-large;
    gap: .5rem;

    @media (min-width: 1024px) {
      height: 70px;
    }
`;

export const StyledSectionTitle = styled(forwardRef((props, ref) => <h1 {...props} ref={ref}>Managed agency selection</h1>))`
  @media (max-width: 640px) {
      font-size: 1.8rem;
  }
`;
 
export const StyledSectionSubTitle = styled(forwardRef((props, ref) => <p {...props} ref={ref}>Strengthen your onboarding process</p>))`
@media (max-width: 640px) {
  font-size: 1.2rem;
}
`;