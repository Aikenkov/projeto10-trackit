import styled from "styled-components"
import { days } from "../services/trackit";
import Day from "./Day";


export default function NewHabit({ add, setAdd }) {
    return (
        <Wrapper add={add}>
            <div>
                <input
                    placeholder="nome do hábito"
                ></input>
                <WeekDays>
                    {days.map((item, index) => {
                        return (
                            <Day
                                key={index}

                            >{item}
                            </Day>)
                    })}
                </WeekDays>
            </div>
            <Choice>
                <h2 onClick={() => {
                    setAdd(false);
                }}>Cancelar</h2>
                <button>Salvar</button>
            </Choice>

        </Wrapper>
    )
}

const Choice = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    h2{
        font-family: Lexend Deca;
        color: var(--light-blue);
        font-size: 15.98px;
        margin-right: 23px;
        cursor: pointer;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--light-blue);
        border-radius: 5px;
        color: white;
        font-size: 15.98px;
        border: none;
        height: 35px;
        width: 84px;
        cursor: pointer;
    }
`;

const WeekDays = styled.div`
    display: flex;
    margin-top: 10px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: white;
    transition: all ease-in 0.2s;
    transition: visibility ease-in 0.3;
    border-radius: 5px;
    margin-bottom: 29px;
    width: 100%;

    ${(props) => {
        if (props.add) {
            return `opacity: 1; height: 180px;  padding: 18px 17px 15px;`
        } else {

            return ` opacity: 0; height: 0px; padding: 0px; visibility: hidden;`
        }
    }}

    input{
        box-sizing: border-box;
        padding: 9px  0 11px 11px ;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        width: 100%;
    }

    & ::placeholder{
        color: var(--light-text);
        font-size: 19px;
    }
`;