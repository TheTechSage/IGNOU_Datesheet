import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "/src/assets/ignou_logo.svg"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Important Dates", href: "/dates" },
    { name: "Datesheet", href: "/datesheet" },
    // { name: "Product", href: "#" },
    // { name: "Features", href: "#" },
    // { name: "Marketplace", href: "#" },
    // { name: "Company", href: "#" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
        <div className="sticky top-0 z-50 bg-white/70 bg-blend-color-dodge">
            <header>
                <nav
                    aria-label="Global"
                    className="flex items-center justify-between p-3 lg:px-8"
                >
                    <div className="flex lg:mr-10 ">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Logo</span>
                            <img
                                alt="logo"
                                src={logo}
                                className="w-auto h-8"
                            />
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 "
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="justify-center flex-1 hidden md:flex lg:gap-x-40 md:gap-x-28 min-h-[28px]">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-base font-semibold leading-6 text-gray-900 
                                hover:border-b-4 hover:border-sky-500 active:border-sky-500 active:border-b-4"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="#"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div> */}
                </nav>

                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className="md:hidden"
                >
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel 
                        className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto
                        bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Logo</span>
                                <img
                                    alt="logo"
                                    src={logo}
                                    className="w-auto h-8"
                                />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="w-6 h-6"
                                />
                            </button>
                        </div>
                        <div className="flow-root mt-6">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="py-6 space-y-2">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className="block px-3 py-2 -mx-3 text-base font-semibold 
                                            leading-7 text-gray-900 rounded-lg hover:bg-sky-500 active:bg-sky-500"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                {/* <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </div>
    );
}
