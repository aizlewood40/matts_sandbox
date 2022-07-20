import { NextPage, NextPageContext } from "next";
import Head from "next/head";

// Components
import Test from "components/Test";

interface IProps {
    helloWorld: string;
}

const TestPage: NextPage<IProps> = ({helloWorld}) => {
    return (
        <>
            <Head>
                <title>{helloWorld}</title>
            </Head>
            <Test />
        </>
    );
}

export const getServerSideProps = async (ctx: NextPageContext) => ({
    props: {
        helloWorld: "hello world",
    },
})

export default TestPage;