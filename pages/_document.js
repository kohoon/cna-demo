import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="ko">
                <Head>
                    <link
                        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                        rel="stylesheet"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.9.4/antd.min.css"
                        integrity="sha512-A0t6D8yn6CdUfczMxIyQEZPjdPd5SUKfemFRLAoMRfrGV9Had9p4B4b0ViJ6EtzbUCu5w6u6FwVDFECOwHQCAA=="
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
