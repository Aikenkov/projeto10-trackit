import { useState } from "react";
import styled from "styled-components"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function Day({ children, index }) {
    const [selected, setSelected] = useState(false)
    const { chosenDays, setChosenDays } = useContext(UserContext)
    return (
        <Wrapper onClick={() => {
            if (selected === false) {
                setSelected(true);
                setChosenDays([...chosenDays, index])
            } else {
                setSelected(false)
                let ind = chosenDays.indexOf(index);
                chosenDays.splice(ind, 1);
            }
        }} selected={selected}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin-right: 4px;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        font-size: 19px;
        cursor: pointer;
        
        ${(props) => {
        if (!props.selected) {
            return `background-color: white;        
                        color: var(--light-text);`
        } else {
            return `background-color: #CFCFCF;        
                        color: white;`
        }
    }}
`;