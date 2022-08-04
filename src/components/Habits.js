import { useEffect, useState } from "react";
import styled from "styled-components";
import { getHabits } from "../services/trackit";
import Habit from "./Habit";


export default function Habits() {
    const [habits, setHabits] = useState([])
    const [reload, setReload] = useState(0)

    /*  setTimeout(() => {
         setReload(reload + 1);
         console.log(reload)
     }, 5000); */


    useEffect(() => {
        getHabits()
            .then((res) => {
                setHabits(...habits, res.data);
            })
            .catch(() => {
                console.log('Obtendo lista')
            })
    }, [])

    if (habits.length === 0) {
        return (
            <Wrapper>
                <h1>Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!</h1>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                {habits.map((item, index) => {
                    return <Habit title={item.name} key={index} habitsDays={item.days} />
                })}
            </Wrapper>
        )
    }

}

const Wrapper = styled.div`
    h1{
        font-size: 17.98px;
        margin-bottom: 110px;
    }
`;