import styled from "styled-components";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import Day from "./Day";
import { createHabit, days } from "../services/trackit";
import ButtonContent from "../styles/ButtonContent";

export default function NewHabit({ add, setAdd }) {
    const { chosenDays, setChosenDays } = useContext(UserContext);
    const [title, setTitle] = useState("");
    const { submits, setSubmits } = useContext(UserContext);
    const { loading, setLoading } = useContext(UserContext);

    function submit() {
        setLoading("true");
        const body = {
            name: title,
            days: chosenDays
        }
        if (chosenDays.length === 0) {
            alert('Selecione ao menos um dia.');
            setLoading("false");
        } else if (title === "") {
            alert('Escolha o nome do habito');
            setLoading("false");
        } else {
            createHabit(body)
                .then(() => {
                    setSubmits(submits + 1);
                    setTitle("");
                    setChosenDays([]);
                    setLoading("false");
                    setAdd(false);
                })
                .catch((res) => {
                    setLoading("false");
                    alert(res.response.data.message);
                });
        }
    }

    return (
        <Wrapper add={add} loading={loading}>
            <div></div>
            <div>
                <input
                    placeholder="nome do hábito"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                ></input>
                <WeekDays>
                    {days.map((item, index) => {
                        return (
                            <Day
                                key={index}
                                index={index}
                            >{item}
                            </Day>)
                    })}
                </WeekDays>
            </div>
            <Choice>
                <h2 onClick={() => {
                    setAdd(false);
                }}>Cancelar</h2>
                <button onClick={submit}><ButtonContent loading={loading} text="Salvar" /></button>
            </Choice>
        </Wrapper>
    );
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
        border: none;
        height: 35px;
        width: 84px;
        cursor: pointer;
    }
    p{
        color: white; 
        font-size: 15.98px;

    }
`;

const WeekDays = styled.div`
    display: flex;
    margin-top: 10px;
`;

const Wrapper = styled.div`
    position: relative;
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
    ${(props) => {
        if (props.loading === "true") {
            return ` input{
                background-color: #F2F2F2;
    }
    & > :first-child{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
    }
    `
        } else {
            return ` input{
                background-color: white;
    }
    & > :first-child{
        display:none;
    }
    `
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