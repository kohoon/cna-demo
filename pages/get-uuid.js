import Link from "next/link";

const GetUuid = (props) => {
    const [uuid, setUuid] = useState("");
    useEffect(() => {
        fetch("/api/uuid").then();
    });
    return (
        <div className="h-screen v-full flex flex-col justify-center items-center">
            qwer-werw-werw-werw
            <div className="mt-4">
                <Link href="/">
                    <a>돌아가기</a>
                </Link>
            </div>
        </div>
    );
};

export default GetUuid;
