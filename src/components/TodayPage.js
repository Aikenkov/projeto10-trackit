import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { markAsDone, todayHabits } from "../services/trackit";
import TodayHabit from "./TodayHabit";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";


export default function TodayPage() {
    const [today, setToday] = useState([]);
    const { submits } = useContext(UserContext);
    const [concluded, setConcluded] = useState(0)
    const totalHabits = today.length;
    const percent = (concluded / totalHabits) * 100

    dayjs.extend(updateLocale);
    dayjs.updateLocale('pt-br', {
        weekdays: [
            "Domingo", "Segunda", "terça", "Quarta", "Quinta", "Sexta", "Sabado"
        ]
    });
    const now = dayjs().locale('pt-br').format("dddd", "DD/MM");
    let month = (dayjs().month()) + 1
    let monthDay = dayjs().date()
    if (monthDay < 10) {
        monthDay = `0${monthDay}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }


    useEffect(() => {
        todayHabits()
            .then((res) => {
                setToday(res.data);
                console.log(res.data);
            })
            .catch(() => {
                console.log('Falha ao obter lista')
            });
    }, [submits])

    return (
        <Wrapper>
            <div>
                <h1>
                    {now}, {monthDay}/{month}
                </h1>
                {concluded === 0 ?
                    <p>Nenhum hábito concluído ainda</p> :
                    <p>{percent}% dos hábitos concluídos</p>}
            </div>

            {today.map((item) => {
                /* if (item.done === true) {
                    setConcluded(concluded + 1)
                } */
                return <TodayHabit
                    key={item.id}
                    Id={item.id}
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