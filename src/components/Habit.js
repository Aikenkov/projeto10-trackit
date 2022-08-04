import styled from "styled-components";

export default function Habit({ title, habitsDays }) {
    return (
        <Wrapper>
            <h2>{title}</h2>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 13px 0 15px;
    width: 100%;
    height: 91px;
    border-radius: 5px;
    background-color: white;

    h2{
        font-size: 19.98px;
    }
`;