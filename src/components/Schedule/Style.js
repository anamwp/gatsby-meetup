import styled from 'styled-components'

export const ScheduleWrapper = styled.div`
    .section-title{
        font-size: ${props => props.theme.fzTitle};
        margin-bottom:50px;
        font-family: ${props => props.theme.fontFamily};
    }
    padding:100px 100px;
    background:#f7f7f7;
    code{
        padding:3px 10px;
        margin-bottom:5px;
        display:block;
    }
`