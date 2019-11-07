import styled from "styled-components"

export const ScheduleWrapper = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fzBase};
    .section-title{
        font-size: ${props => props.theme.fzTitle};
        margin-bottom:50px;
        font-family: ${props => props.theme.titleFontFamily};
    }
    padding:100px 100px;
    @media(max-width:768px) {
        padding:50px 15px;
    }
    background:#f7f7f7;
    code{
        padding:3px 10px;
        margin-bottom:5px;
        display:block;
    }
`