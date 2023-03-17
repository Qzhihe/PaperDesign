import styled from "styled-components";

const AppWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
`

export const DemoWrapper = styled.div`
    width: 240px;
    height: 240px;
    margin: 24px;
    padding: 12px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 6px;
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
    font-family: Smiley Sans;
`

export default AppWrapper