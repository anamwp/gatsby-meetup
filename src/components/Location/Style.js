import styled from "styled-components"

export const LocationWrapper = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fzBase};
    .section-title{
        font-size: ${props => props.theme.fzTitle};
        margin-bottom:50px;
        font-family: ${props => props.theme.titleFontFamily};
    }
    text-align:center;
    padding:100px 0px;
    @media(max-width:768px) {
        padding:50px 15px;
    }
    .place{
        margin-top:15px;
    }
`