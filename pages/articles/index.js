import ArticleList from "./../../components/view/ArticleList";

const Page = (props) => {
    return <ArticleList {...props} />;
};

Page.getInitialProps = async function () {
    // await
    return {
        list: []
    };
};

export default Page;
