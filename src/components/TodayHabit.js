import { useEffect, useState } from "react";
import styled from "styled-components";
import doneImage from '../assets/done-image.png'
import { markAsDone } from "../services/trackit";

export default function TodayHabit({ title, done, senquence, record, Id }) {
    const [selected, setSelected] = useState(false)


    function turnMark() {
        if (selected === false) {
            markAsDone(Id)
                .then(() => {
                    setSelected(true)
                })
                .catch(() => {
                    console.log("Deu errado ao marcar como feito")
                })
        }


    }

    return (
        <Wrapper>
            <div>
                <h1>{title}</h1>
                <span>Sequência atual: {senquence}</span>
                <span>Seu recorde: {record}</span>
            </div>
            <IconDone done={done} onClick={turnMark}>
                <img alt="done" src={doneImage} />
            </IconDone>

        </Wrapper>
    )
}

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
        
        img{
            height: 28px;
            width: 35px;
        }

        ${props => {
        if (props.done) {
            return `
                background: #8FC549;
                border: none;
                `
        } else {
            return `
                background: #EBEBEB;
                border: 1px solid #E7E7E7;
                `
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

   

    h1{
        font-size: 19.976px;
        margin-bottom: 7px;
    }
    span{
        font-size: 12.976px;
    }
`;