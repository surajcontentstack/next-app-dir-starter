import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="bg-white sticky top-0 z-9">
            {/* Notification Bar */}
            <div className="bg-[#f2efff] mx-auto text-center py-1 px-0 text-gray">
                <p>To Our Community: Please read this important update.</p>
            </div>

            {/* Navigation Bar */}
            <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
                {/* Logo */}
                <div className="flex-none w-44 my-2">
                    {/* Use next/image for logo */}
                    <Link href="/" className="logo-tag">
                        <Image
                            src="/assets/logo.svg"
                            alt="Company Name"
                            title="Company Name"
                            className="logo"
                            width={130}
                            height={50}
                        />
                    </Link>
                </div>

                {/* Hamburger Icon (Mobile) */}
                <div className="lg:hidden">
                    <input type="checkbox" className="menu-btn" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <ul className="flex">
                        <NavItem href="/" label="Home" />
                        <NavItem href="/about-us" label="About Us" />
                        <NavItem href="/blog" label="Blog" />
                        <NavItem href="/contact-us" label="Contact Us" />
                    </ul>
                    {/* JSON Preview */}
                    <div className="json-preview">
                        <div className="Tooltip-Wrapper">
                            <span
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                                <Image
                                    src="/assets/json.svg"
                                    alt="JSON Preview icon"
                                    width={16}
                                    height={16}
                                />
                            </span>
                            {/* <div className="Tooltip-Tip top">JSON Preview</div> */}
                        </div>
                    </div>
                </nav>
            </nav>
        </header>
    );
};

// Individual Navigation Item
const NavItem: React.FC<{ href: string; label: string }> = ({
    href,
    label,
}) => {
    return (
        <li className="nav-li">
            <Link
                href={href}
                className="text-gray-800 hover:text-[#715cdd]  transition duration-300 px-6 py-8 ">
                {label}
            </Link>
        </li>
    );
};
