import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import Head from 'next/head';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
    // return <div className="pt-40">{children}</div>;
    return <div className="pt-40 from-transparent to-[#] dark:to-[#] bg-cover bg-no-repeat before:absolute before:left-0 before:top-0 before:h-[320px] before:w-full before:bg-gradient-to-t">{children}</div>;

};

export const RootLayout = ({ children, id }: { children: React.ReactNode, id:string }) => {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Head>
                <title>Keyboard</title>
            </Head>
            <div>
                <Header />
                <div className="md:container md:mx-auto px-4">
                    <ContentLayout>{children}</ContentLayout>
                </div>
            </div>
            <Footer id={id} />
        </div>
    );
};
