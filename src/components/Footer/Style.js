import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fzBase};
    text-align:center;
    background:${props => props.theme.brandPrimary};
    color:white;
    margin-top:30px;
    a{
        color:white;
    }
    padding:30px;
`