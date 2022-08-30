import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import doneImage from "../assets/done-image.png";
import UserContext from "../contexts/UserContext";
import { markAsDone, markAsUndone } from "../services/trackit";

export default function TodayHabit({ title, done, sequence, record, Id }) {
    const [selected, setSelected] = useState(done);
    const { submits, setSubmits } = useContext(UserContext);
    const [checked, setCheked] = useState(false);
    const [isrecord, setIsrecord] = useState(false);
    const sequencetext = sequence === 1 ? "dia" : "dias";
    const recordtext = record === 1 ? "dia" : "dias";
    useEffect(() => {
        if (sequence === record && selected === true) {
            setIsrecord(true);
            setCheked(true);
        } else {
            setIsrecord(false);
            setCheked(false);
        }
    }, [selected]);

    function turnMark() {
        if (selected === false) {
            markAsDone(Id)
                .then(() => {
                    setSelected(true);
                    setSubmits(submits + 1);
                })
                .catch((res) => {
                    alert(res.response.data.message);
                });
        } else {
            markAsUndone(Id)
                .then(() => {
                    setSelected(false);
                    setSubmits(submits - 1);
                })
                .catch((res) => {
                    alert(res.response.data.message);
                });
        }
    }

    return (
        <Wrapper>
            <div>
                <h1>{title}</h1>
                <span>
                    Sequência atual:{" "}
                    <Sequence checked={checked}>{sequence}</Sequence>{" "}
                    {sequencetext}
                </span>
                <span>
                    Seu recorde: <Record isrecord={isrecord}>{record}</Record>{" "}
                    {recordtext}
                </span>
            </div>
            <IconDone done={done} onClick={turnMark}>
                <img alt='done' src={doneImage} />
            </IconDone>
        </Wrapper>
    );
}

const Sequence = styled.span`
    color: ${(props) => (props.checked ? `#8FC549` : `#666666`)};
`;

const Record = styled.span`
    color: ${(props) => (props.isrecord ? `#8FC549` : `#666666`)};
`;

const IconDone = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    display: flex;
    width: 69px;
    height: 69px;
    border-radius: 5px;
    cursor: pointer;

    img {
        height: 28px;
        width: 35px;
    }
    ${(props) => {
        if (props.done) {
            return `
                background: #8FC549;
                border: none;
                `;
        } else {
            return `
                background: #EBEBEB;
                border: 1px solid #E7E7E7;
                `;
        }
    }}
`;

const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: white;
    width: 100%;
    min-height: 94px;
    display: flex;
    justify-content: space-between;
    padding: 13px 13px 13px 15px;
    margin-bottom: 10px;
    border-radius: 5px;

    & > :first-child {
        display: flex;
        flex-direction: column;
        max-width: 74%;
    }
    h1 {
        font-size: 19.976px;
        margin-bottom: 7px;
    }
    span {
        font-size: 12.976px;
    }
`;
