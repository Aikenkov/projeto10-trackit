import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { todayHabits } from "../services/trackit";
import TodayHabit from "./TodayHabit";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";

export default function TodayPage() {
    const [today, setToday] = useState([]);
    const { submits } = useContext(UserContext);
    const { concluded } = useContext(UserContext);
    const { percentage } = useContext(UserContext);

    dayjs.extend(updateLocale);
    dayjs.updateLocale('pt-br', {
        weekdays: [
            "Domingo", "Segunda", "terça", "Quarta", "Quinta", "Sexta", "Sabado"
        ]
    });
    const now = dayjs().locale('pt-br').format("dddd", "DD/MM");
    let month = (dayjs().month()) + 1;
    let monthDay = dayjs().date();
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
            })
            .catch((res) => {
                alert(res.response.data.message);
            });
    }, [submits]);

    return (
        <Wrapper>
            <div>
                <h1>
                    {now}, {monthDay}/{month}
                </h1>
                {concluded === 0 ?
                    <p>Nenhum hábito concluído ainda</p> :
                    <h6>{percentage}% dos hábitos concluídos</h6>}
            </div>
            {today.map((item) => {
                return <TodayHabit
                    key={item.id}
                    Id={item.id}
                    title={item.name}
                    done={item.done}
                    sequence={item.currentSequence}
                    record={item.highestSequence}
                />
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 100px 5vw;

    h1{
        font-size: 22.98px;
        color: var(--heavy-blue);
    }
    p{
        color: #BABABA;
        font-size: 17.98px;
        margin-bottom: 28px;
    }
    h6{
        color: #8FC549;
        font-size: 17.98px;
        margin-bottom: 28px;
    }
`;