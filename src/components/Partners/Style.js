import styled from 'styled-components'

export const PartnerWrapper = styled.div`
    padding:100px 100px;
    background:#f7f7f7; 
    text-align:center;
    .section-title{
        font-size: ${props => props.theme.fzTitle};
        margin-bottom:50px;
        font-family: ${props => props.theme.fontFamily};
    }
`