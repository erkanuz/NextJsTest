import styled from "styled-components";

export const StyledSectionContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    place-items: center;
    width: 1024px;

    @media (max-width: 912px) {
        gap: 1.5rem;
    }

    @media (max-width: 1024px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
`;