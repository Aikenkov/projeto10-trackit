import styled from "styled-components"

export default function FormStyle({ children, loading }) {
    return (
        <Wrapper loading={loading}>{children}</Wrapper>
    )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    position: relative;

   

    ${(props) => {
        if (props.loading === "false") {
            return `
                &  > :first-child{
                    display: none;
                }

                input{
                    box-sizing: border-box;
                    width: 85%;
                    margin-bottom: 6px;
                    border-radius: 5px;
                    border: 1px solid var(--border-color);
                    background-color: #ffffff;
                    padding: 9px 0 11px 11px;
                }

                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    background-color: var(--light-blue);
                    border: none;      
                    width: 85%;
                    height: 45px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `
        } else {
            return `

                & > :first-child{
                      width: 100%;
                      height: 100%;
                      background-color: rgba(255, 255, 255, 0.5);
                      position: absolute;
                      top: 0;
                      right: 0;
                    }

                input{
                     box-sizing: border-box;
                     width: 85%;
                     background-color: #F2F2F2;
                     margin-bottom: 6px;
                     border-radius: 5px;
                     border: 1px solid var(--border-color);
                     padding: 9px 0 11px 11px;
                 }

                button{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        box-sizing: border-box;
                        background-color: var(--light-blue);
                        border: none;      
                        width: 85%;
                        height: 45px;
                        border-radius: 5px;
                        cursor: pointer;
                    }
            `
        }
    }}

    

    & ::placeholder{
        color: var(--light-text);
    }

    

    p{
        color: #ffffff;
        font-size: 20.98px;
    }

    a{
        margin-top: 25px;
        color: var(--light-blue);
        font-size: 14px;
        text-align: center;
        z-index: 3;
    }
`;