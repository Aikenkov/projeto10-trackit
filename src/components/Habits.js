import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { getHabits } from "../services/trackit";
import Habit from "./Habit";

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const { submits } = useContext(UserContext);

    useEffect(() => {
        getHabits()
            .then((res) => {
                setHabits(res.data);
            })
            .catch((res) => {
                alert(res.response.data.message);
            });
    }, [submits])

    if (habits.length === 0) {
        return (
            <Wrapper>
                <h1>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</h1>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                {habits.map((item, index) => {
                    return <Habit habitId={item.id} title={item.name} key={index} habitsDays={item.days} />
                })}
            </Wrapper>
        );
    }

}

const Wrapper = styled.div`
    margin-bottom: 110px;

    h1{
        font-size: 17.98px;
    }
`;