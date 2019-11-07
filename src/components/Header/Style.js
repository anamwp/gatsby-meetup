import styled from 'styled-components'
export const HeaderWrapper = styled.header`
    text-align:center;
    margin: 0 auto;
    max-width: 930px;
    padding: 0px 1.0875rem 0;
    padding-top: 0;
    h1{
        font-family: ${props => props.theme.titleFontFamily};
        font-weight:bold;
        margin-top:20px;
    }
`