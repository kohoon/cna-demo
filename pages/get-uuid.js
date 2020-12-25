// import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const GetUuid = (props) => {
    /*
    const [uuid, setUuid] = useState("");
    //"화면"에 마운트가 된 이후 동작
    useEffect(() => {
        fetch("/api/uuid")
            .then((response) => response.json())
            .then((json) => setUuid(json.uuid));
    }, []);
    */
    console.log("GetUuid.render");
    console.log(props.debug);
    return (
        <div className="h-screen v-full flex flex-col justify-center items-center">
            <h1 className="mb-4">{props.label}</h1>
            {props.uuid}
            <div className="mt-4">
                <Link href="/">
                    <a>돌아가기</a>
                </Link>
            </div>
        </div>
    );
};

// getInitialProps : 초기화 할 때 필요한 Props를 가져오는 함수
GetUuid.getInitialProps = async function () {
    console.log("GetUuid.getInitialProps");
    // 반드시 async function 으로 작성
    const response = await axios.get("http://localhost:3000" + "/api/uuid");
    return {
        label: "UUID",
        uuid: response.data.uuid,
        debug: "debug message"
    };
};

export default GetUuid;
