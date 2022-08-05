import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { todayHabits } from "../services/trackit";
import TodayHabit from "./TodayHabit";


export default function TodayPage() {
    const [today, setToday] = useState([])
    const { submits } = useContext(UserContext)

    useEffect(() => {
        todayHabits()
            .then((res) => {
                setToday(res.data);
                console.log(res.data);
            })
            .catch(() => {
                console.log('Falha ao obter lista')
            })
    }, [submits])

    return (
        <Wrapper>
            <div>
                <h1>
                    Segunda, 17/05
                </h1>
                <p>Nenhum hábito concluído ainda</p>
            </div>

            {today.map((item) => {
                return <TodayHabit
                    key={item.id}
                    title={item.name}
                    done={item.done}
                    senquence={item.currentSequence}
                    record={item.highestSequence}
                />
            })}

        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 100px 18px;
    h1{
        font-size: 22.98px;
        color: var(--heavy-blue);
    }
    p{
        color: #BABABA;
        font-size: 17.98px;
        margin-bottom: 28px;
    }
`;