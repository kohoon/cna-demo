import Link from "next/link";
import Router from "next/router";
import { Button } from "antd";
import axios from "axios";

const GetDouble = (props) => {
    return (
        <div className="v-full h-screen flex flex-col justify-center items-center">
            <div className="text-6xl">{props.value}</div>
            <div className="mt-4">
                <Button onClick={() => Router.back()}>돌아가기</Button>
            </div>
        </div>
    );
};

GetDouble.getInitialProps = async function (context) {
    const value = context.query.value;
    const response = await axios.get(
        "http://localhost:3000" + "/api/double?value=" + value
    );
    return {
        value: response.data.value
    };
};

export default GetDouble;
