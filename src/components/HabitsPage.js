import { useState } from "react";
import styled from "styled-components";
import Habits from "./Habits";
import NewHabit from "./NewHabit";

export default function HabitsPage() {
    const [add, setAdd] = useState(false);

    return (
        <Wrapper>
            <AddHabit>
                <h1>Meus hábitos</h1>
                <button onClick={() => {
                    setAdd(true);
                }}>+</button>
            </AddHabit>
            <NewHabit add={add} setAdd={setAdd} />
            <Habits />
        </Wrapper>
    );
}

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
    margin-bottom: 22px;

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