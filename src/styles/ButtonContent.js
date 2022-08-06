import { ThreeDots } from "react-loader-spinner";

export default function ButtonContent({ loading, text }) {
    if (loading === "true") {
        return (
            <ThreeDots
                height="13"
                width="51"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        );
    } else {
        return (
            <p>{text}</p>
        );
    }
}