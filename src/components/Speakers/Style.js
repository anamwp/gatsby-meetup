import styled from "styled-components"

export const SpeakerWrapper = styled.div`
    padding:100px 100px;
    .section-title{
        font-size: ${props => props.theme.fzTitle};
        margin-bottom:50px;
        font-family: ${props => props.theme.fontFamily};
    }
    .single-speaker{
        display:flex;
        flex-wrap:wrap;
        margin-bottom:30px;
        align-items:center;
        .image{
            linhe-height:0;
            border:solid 1px #f7f7f7;
        }
        .bio{
            margin-left:30px;
            flex: 2 0 0;
            .name{
                font-weight:bold;
                font-family: ${props => props.theme.fontFamily};
                font-size: ${props => props.theme.fzSubtitle} ;
            }
            p{
                margin-bottom: 5px;
            }
        }
    }
`