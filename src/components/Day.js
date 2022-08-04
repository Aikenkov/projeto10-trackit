import { useState } from "react";
import styled from "styled-components"



export default function Day({ children }) {
    const [selected, setSelected] = useState(false)

    return (
        <Wrapper onClick={() => {
            setSelected(!selected)
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