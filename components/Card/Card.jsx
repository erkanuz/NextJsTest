import { StyledCard, StyledCardTitle, StyledCardDes } from './elements'

export const SectionCard = ({...props }) => {
    return <StyledCard { ...props } />
};

export const SectionCardTitle = ({...props }) => {
    return <StyledCardTitle { ...props } />
};

export const SectionCardDes = ({...props }) => {
    return <StyledCardDes { ...props } />
};