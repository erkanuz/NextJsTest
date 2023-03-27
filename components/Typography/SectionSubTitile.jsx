/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { StyledSectionSubTitle } from './elements'

export const SectionSubTitle = forwardRef(({...props}, ref) => {
    return <StyledSectionSubTitle {...props} ref={ref}/>;
});