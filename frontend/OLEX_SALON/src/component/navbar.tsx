import { ScissorsIcon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import { BsScissors } from "react-icons/bs";
import { FaShirt } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const navbar = () => {
  const navigator = useNavigate();
  const NavLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
  ];

  return (
    <nav className=" flex items-center justify-between h-16   p-6 mb-5 mt-1 border-b-2 border-[#F8D3B8]">
      <div className=" flex flex-col items-center ">
        <BsScissors
          color="#436D83"
          size={30}
          onClick={() => {
            navigator("/");
          }}
        />
        <Text>OLEX</Text>
      </div>

      <ul className=" flex gap-x-4 text-xl ">
        {NavLinks.map((navlinks, index) => (
          <li key={index} className=" hover:underline  hover:font-medium">
            <Link to={navlinks.link}>{navlinks.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default navbar;
