import styled from "styled-components"

export default function Form({ children }) {
    return (
        <FormStyle>{children}</FormStyle>
    )
}


const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;

    input{
        box-sizing: border-box;
        width: 85%;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        padding: 9px 0 11px 11px;
    }

    & ::placeholder{
        color: var(--light-text);
    }

    button{
        box-sizing: border-box;
        background-color: var(--light-blue);
        border: none;
        color: #ffffff;
        width: 85%;
        height: 45px;
        border-radius: 5px;
    }

    a{
        margin-top: 25px;
        color: var(--light-blue);
        font-size: 14px;
        text-align: center;
    }
`;