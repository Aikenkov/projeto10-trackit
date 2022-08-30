import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { DeleteHabit } from "../services/trackit";

export default function Delete({ habitId }) {
    const [confirm, SetConfirm] = useState(false);
    const { submits, setSubmits } = useContext(UserContext);
    useEffect(() => {
        if (confirm === true) {
            DeleteHabit(habitId)
                .then(() => {
                    setSubmits(submits + 1);
                    SetConfirm(false);
                })
                .catch((res) => {
                    SetConfirm(false);
                    alert(res.response.data.message);
                });
        }
    }, [confirm]);

    return (
        <>
            <ion-icon
                onClick={() => {
                    SetConfirm(window.confirm("Quer deletar o hábito?"));
                }}
                name='trash-outline'
            ></ion-icon>
        </>
    );
}
