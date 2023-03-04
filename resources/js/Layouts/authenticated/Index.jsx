import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AuthenticatedLayout = ({children}) => {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Start Sidebar */}
                <Sidebar/>
                {/* End Sidebar */}

                {/* Start Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* Start Topbar */}
                        <Topbar/>
                        {/* End Topbar*/}
                        <main>{children}</main>
                    </div>
                </div>

                {/* End Content */}
            </div>

            <div className="w-full h-screen lg:hidden flex justify-center px-4 bg-black">
                <div className="text-white text-2xl leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
};

export default AuthenticatedLayout;
