import { useEffect, useState } from "react";
import styled from "styled-components";
import { getHabits } from "../services/trackit";


export default function Habits() {
    const [habits, setHabits] = useState([])
    useEffect(() => {
        getHabits()
            .then((res) => {
                setHabits(res.data)
            })
            .catch(() => {
                console.log('Obtendo lista')
            })
    })

    return (
        <>
            {habits.length === 0 ?
                (<Wrapper>
                    <h1>Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!</h1>
                </Wrapper>) :
                (<Wrapper>
                    <h1>ai sim</h1>
                </Wrapper>)}
        </>


    )
}

const Wrapper = styled.div`
    h1{
        font-size: 17.98px;
    }
`;