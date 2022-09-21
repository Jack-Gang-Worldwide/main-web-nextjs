import Button from "../button/Button";
import Link from "next/link";
import navData from "../../data/navbar-button";

const Navbar = () => {
  return (
    <>
      <nav className="w-full absolute top-0 left-0 py-4">
        <div className="max-w-[1220px] mx-auto flex flex-row justify-between items-center">
          <h2 className="text-[36px] text-white font-bold inline-block">JäG</h2>
          <div className="flex flex-row gap-6 items-center">
            {navData.map(({ name, route }, key) => (
              <Link href={route}>
                <p className="text-white text-lg hover:cursor-pointer">
                  {name}
                </p>
              </Link>
            ))}
            <Button href="">Join Our Server</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
