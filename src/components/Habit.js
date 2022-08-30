import styled from "styled-components";
import { days } from "../services/trackit";
import Delete from "./Delete";

export default function Habit({ title, habitsDays, habitId }) {
    return (
        <Wrapper>
            <h2>{title}</h2>
            <Delete habitId={habitId} />
            <Week>
                {days.map((item, index) => {
                    if (!habitsDays.includes(index)) {
                        return (
                            <WeekDay
                                key={index}
                                background='white'
                                border='1px solid var(--border-color)'
                                color='var(--light-text)'
                            >
                                {item}
                            </WeekDay>
                        );
                    } else {
                        return (
                            <WeekDay
                                key={index}
                                background='#CFCFCF'
                                border='none'
                                color='white'
                            >
                                {item}
                            </WeekDay>
                        );
                    }
                })}
            </Week>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    box-sizing: border-box;
    padding: 13px 0 15px 15px;
    margin-bottom: 10px;
    width: 100%;
    min-height: 91px;
    border-radius: 5px;
    background-color: white;
    position: relative;

    ion-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 16px;
        cursor: pointer;
    }

    h2 {
        font-size: 19.98px;
        max-width: 90%;
    }
`;

const WeekDay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background-color: ${(props) => props.background};
    color: ${(props) => props.color};
    border: ${(props) => props.border};
    border-radius: 5px;
    margin-right: 4px;
`;

const Week = styled.div`
    display: flex;
    margin-top: 8px;
`;
