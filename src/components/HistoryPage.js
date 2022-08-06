import styled from "styled-components";

export default function HistoryPage() {
    return (
        <Wrapper>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o
                histórico dos seus hábitos aqui!</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 100px 5vw;

    h1{
        color: var(--heavy-blue);
        font-size: 22.98px;
        margin-bottom: 17px;
    }
    p{
        font-size: 17.98px;
    }
`;