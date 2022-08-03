import { useContext } from "react";
import UserContext from "../contexts/UserContext";



/* 
const SEC = 1000;
const MIN_5 = SEC * 60 * 5; */

function renderError() {
    localStorage.clear("token");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {
    const [teste, setTeste] = useContext(UserContext)

    console.log(teste)

    const auth = localStorage.getItem("token");


    /*   if (!auth) {
          return renderError();
      }
  
       const now = +new Date();
       const timeLogged = auth.timestamp; */

    if (auth) {
        return (
            <>
                {children}
            </>
        );
    } else {
        renderError();
    }
}
