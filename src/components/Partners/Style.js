import styled from 'styled-components'

export const PartnerWrapper = styled.div`
    padding:100px 100px;
    background:#f7f7f7; 
    text-align:center;
    @media(max-width:768px) {
        padding:50px 15px;
    }
    .section-title{
        font-size: ${props => props.theme.fzTitle};
        margin-bottom:50px;
        font-family: ${props => props.theme.titleFontFamily};
    }
    .all-partners{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        align-items:center;
        @media(max-width:768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap:20px;
        }
    }
`