import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons from Lucide

const Navbar: FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <div
        className="flex items-center space-x-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src="/logo.svg" alt="Thrivr Logo" className="w-10 h-10" />
        <span className="text-xl font-bold">Thrivr</span>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="block lg:hidden text-gray-700"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links (Desktop) */}
      <NavigationMenu>
        <NavigationMenuList className="hidden lg:flex items-center space-x-6">
          <NavLinks />
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute inset-x-0 top-16 z-50 bg-white shadow-lg p-4 lg:hidden">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col space-y-4">
              <NavLinks />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  );
};

// Navigation Links Component

interface NavLinksProps {
  navigate: (path: string) => void;
}

const NavLinks: FC<NavLinksProps> = ({ navigate }) => (
  <>
    {/* Why Thrivr */}
    <NavigationMenuItem>
      <NavigationMenuLink href="/why-thrivr" className="hover:text-blue-600">
        Why Thrivr
      </NavigationMenuLink>
    </NavigationMenuItem>

    {/* Product Dropdown */}
    <NavigationMenuItem>
      <NavigationMenuTrigger className="hover:text-blue-600">
        Product
      </NavigationMenuTrigger>
      <NavigationMenuContent className="absolute mt-2 bg-white shadow-md rounded-md">
        <NavigationMenuLink
          href="/product/feature1"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Feature 1
        </NavigationMenuLink>
        <NavigationMenuLink
          href="/product/feature2"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Feature 2d
        </NavigationMenuLink>
        <NavigationMenuLink
          href="/product/feature3"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Feature 3
        </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Pricing */}
    <NavigationMenuItem>
      <NavigationMenuLink href="/pricing" className="hover:text-blue-600">
        Pricing
      </NavigationMenuLink>
    </NavigationMenuItem>

    {/* Learn Dropdown */}
    <NavigationMenuItem>
      <NavigationMenuTrigger className="hover:text-blue-600">
        Learn
      </NavigationMenuTrigger>
      <NavigationMenuContent className="absolute mt-2 bg-white shadow-md rounded-md">
        <NavigationMenuLink
          href="/learn/blog"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Blog
        </NavigationMenuLink>
        <NavigationMenuLink
          href="/learn/webinars"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Webinars
        </NavigationMenuLink>
        <NavigationMenuLink
          href="/learn/resources"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Resources
        </NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    {/* Login and Start for Free */}
    <NavigationMenuItem>
      <button
        onClick={() => navigate("/login")}
        className="text-gray-700 hover:text-blue-600"
      >
        Login
      </button>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <button
        onClick={() => navigate("/start")}
        className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-blue-700"
      >
        Start for Free
      </button>
    </NavigationMenuItem>
  </>
);

export default Navbar;
