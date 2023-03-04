import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Topbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const [hamburgerOpen, setHamburgerOpen] = useState(true);
    const dropdownTarget = useRef();
    const hamburgerTarget = useRef();

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }

        setDropdownOpen(!dropdownOpen);
    };
    const triggerHamburger = () => {
        if (hamburgerOpen) {
            hamburgerTarget.current.classList.remove("hidden");
        } else {
            hamburgerTarget.current.classList.add("hidden");
        }

        setHamburgerOpen(!hamburgerOpen);
    };
    return (
        <div className="flex justify-between items-center gap-4">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
                style={{ backgroundImage: "url(/icons/ic_search.svg)" }}
            />
            <div
                className="flex items-center gap-4 max-[1190px]:hidden cursor-pointer"
                onClick={triggerDropdown}
            >
                <span className="text-black text-sm font-medium">
                    Welcome, Granola Sky
                </span>

                <div className="flex flex-col gap-2 relative">
                    <div className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button">
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </div>
                    <div
                        className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        ref={dropdownTarget}
                    >
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </a>
                        <a
                            href="sign_in.html"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden max-[1190px]:block relative">
                <button
                    className="flex justify-center items-center rounded-full h-10 w-10 hover:bg-gray-400 hover:shadow-xl hover:text-gray-200"
                    onClick={triggerHamburger}
                >
                    <span>
                        <RxHamburgerMenu />
                    </span>
                </button>
                <div
                    className="hidden absolute top-[50px] max-w-[400px] w-[250px] right-0 float-right flex flex-col z-[9999]"
                    ref={hamburgerTarget}
                >
                    <div className="flex flex-col gap-2 items-end ">
                        <div className="flex flex-nowrap items-center gap-3">
                            <span className="text-black text-sm font-medium">
                                Welcome, Granola Sky
                            </span>
                            <img
                                src="/images/avatar.png"
                                className="rounded-full object-cover w-[60px]"
                                alt=""
                            />
                        </div>
                        <div className="text-right bg-white rounded-2xl text-black font-medium flex flex-col gap-4 overflow-hidden mt-4 p-3 w-full">
                            <a
                                href="#!"
                                className="transition-all hover:bg-sky-100"
                            >
                                Dashboard
                            </a>
                            <a
                                href="#!"
                                className="transition-all hover:bg-sky-100 "
                            >
                                Settings
                            </a>
                            <a
                                href="sign_in.html"
                                className="transition-all hover:bg-sky-100 "
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
