import styled from "styled-components"

export const SpeakerWrapper = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-size: ${props => props.theme.fzBase};
    padding:100px 100px;
    @media(max-width:768px) {
        padding:50px 15px;
    }
    .section-title{
        font-size: ${props => props.theme.fzTitle};
        margin-bottom:50px;
        font-family: ${props => props.theme.titleFontFamily};
        @media(max-width:768px) {
            text-align:center;
        }
    }
    .single-speaker{
        display:grid;
        grid-template-columns:200px 1fr;
        @media(max-width:768px) {
            grid-template-columns:1fr;
        }
        flex-wrap:wrap;
        margin-bottom:30px;
        align-items:center;
        
        .image{
            line-height:0;
            border:solid 1px #f7f7f7;
        }
        .bio{
            margin-left:30px;
            flex: 2 0 0;
            .name{
                font-weight:bold;
                font-family: ${props => props.theme.titleFontFamily};
                font-size: ${props => props.theme.fzSubtitle} ;
            }
            p{
                margin-bottom: 5px;
            }
        }
        @media(max-width:768px) {
            flex-flow:wrap;
            text-align:center;
            .image{
                width:100%;
                line-height:0;
                border:none;
            }
            .bio{
                margin-left:0;
                margin-top:10px;
            }
        }
    }
`