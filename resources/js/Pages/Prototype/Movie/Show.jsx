import { Head, Link } from "@inertiajs/inertia-react";
import ReactPlayer from "react-player";

const Show = () => {
    return (
        <>
            <Head>
                <title>movie</title>
            </Head>
            <section
                class="mx-auto w-screen h-screen relative watching-page font-poppins bg-form-bg overflow-x-hidden"
                id="stream"
            >
                <div className="pt-[100px] ">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=xrmTie-gdco"
                        controls
                        width="100%"
                        height="100vh"
                    />
                </div>
                {/* <!-- Button back to dashboard --> */}
                <div class="absolute top-5 left-5 z-20">
                    <Link href={route("prototype.dashboard")}>
                        <img
                            src="/icons/ic_arrow-left.svg"
                            class="transition-all btn-back w-[46px]"
                            alt="stream"
                        />
                    </Link>
                </div>

                {/* <!-- Video Title --> */}
                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span class="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        Details Screen Part Final
                    </span>
                </div>
            </section>
        </>
    );
};

export default Show;
