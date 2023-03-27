/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { StyledSectionTitle } from './elements'

export const SectionTitle = forwardRef(({...props}, ref) => {
    return <StyledSectionTitle {...props} ref={ref}/>;
});