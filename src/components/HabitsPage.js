import { useState } from "react"
import styled from "styled-components"


export default function HabitsPage() {
    const [add, setAdd] = useState(true)
    return (
        <Wrapper>
            <AddHabit>
                <h1>Meus hábitos</h1>
                <button onClick={() => {
                    setAdd(!add);
                }}>+</button>
            </AddHabit>
            <NewHabit add={add}>
                <input></input>
                <input></input>
                <input></input>


            </NewHabit>
        </Wrapper>
    )
}

const NewHabit = styled.div`
box-sizing: border-box;
    width: 100%;
    ${(props) => {
        if (props.add) {
            return `opacity: 1; height: 180px;  padding: 18px 17px 15px;`
        } else {

            return ` opacity: 0; height: 0px; padding: 0px; visibility: hidden;`
        }
    }}

    background-color: white;
    transition: all ease-in 0.2s;
    transition: visibility ease-in 0.3;
    border-radius: 5px;
    
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 92px 18px 0;
`;

const AddHabit = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1{
        font-family: Lexend Deca;
        font-size: 22.98px;
        color: var(--heavy-blue);
    }
    button{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        width: 40px;
        border-radius: 4.5px;
        background-color: var(--light-blue);
        padding-bottom: 5px;
        color: white;
        font-size: 27px;
        border: none;
        cursor: pointer;
    }
`;