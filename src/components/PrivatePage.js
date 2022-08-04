import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";




function RenderError() {
    const navigate = useNavigate()
    localStorage.clear("token");
    setTimeout(() => {
        navigate('/')
    }, 2000)

    return (<h1>VOCÊ NÃO É AUTORIZADO</h1>);

}

export default function PrivatePage({ children }) {
    const auth = localStorage.getItem("token");
    if (auth) {
        return (
            <>
                <Header />
                {children}
                <Footer />
            </>
        );
    } else {
        RenderError();
    }
}
