import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeItem, setActiveItem] = useState("");

  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };

  const menuItems = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/*logo */}
          <div>
            <a href="/">
              <img src="/public/logo.png" alt="" className="h-8  " />
            </a>
          </div>
          {/*nav items */}

          <div className="space-x-8 hidden md:flex items-center">
            {menuItems.map((item, index) => (
              <a
                className="text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all  duration-300"
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>

          {/*mobile menu */}

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                className=" block text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all  duration-300"
                key={index}
                href={item.href}
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className=" block border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
