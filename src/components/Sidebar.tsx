import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <main className="w-full mr-20">{children}</main>

            <div className="fixed w-20 h-screen p-4 bg-white border-l-[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href="/">
                        <div className="inline-block p-3 text-white bg-purple-800 rounded-lg">
                            <RxSketchLogo size={20} />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
                    <Link href="/">
                        <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            <RxDashboard size={20} />
                        </div>
                    </Link>
                    <Link href="/customers">
                        <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            <RxPerson size={20} />
                        </div>
                    </Link>
                    <Link href="/orders">
                        <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            <HiOutlineShoppingBag size={20} />
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="inline-block p-3 my-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">
                            <FiSettings size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
