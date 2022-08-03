import { useNavigate } from "react-router-dom";

const SEC = 1000;
const MIN_5 = SEC * 60 * 5;

function renderError() {
    localStorage.clear("trackit");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem("trackit"));

    if (!auth) {
        return renderError();
    }

    const now = +new Date();
    const timeLogged = auth.timestamp;

    if (now - timeLogged <= MIN_5) {
        return (
            <>
                {/* <Header /> */}
                {children}
            </>
        );
    } else {
        navigate("/");
        renderError();
    }
}
