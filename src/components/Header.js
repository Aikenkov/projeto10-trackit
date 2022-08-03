import styled from "styled-components";

export default function Header({ img }) {
    return (
        <Wrapper>
            <h1>TrackIt</h1>
            <img src={img} alt="perfil" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 70px;
    padding: 10px 18px;
    background-color: var(--heavy-blue);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img{
        height: 51px;
        width: 51px;
        border-radius: 50%;
    }

    h1{
        font-size: 39px;
        font-family: Playball;
        color: #ffffff;
    }
    

`;