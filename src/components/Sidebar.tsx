import { useState } from "react";
export const Sidebar = ({ children }: { children: JSX.Element }) => {
  const [open, setOpen] = useState(true);
  const Menus = [{ title: "Rick & Morty", src: "Chart_fill" }];

  return (
    <div className="flex relative">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#081a51] h-screen sticky top-0 left-0 p-5  pt-8 duration-300`}
      >
        <img
          src="../src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="../src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Lista de Personajes
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${index === 0 && "bg-light-white"} `}
            >
              <img src={`../src/assets/${Menu.src}.png`} />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen max-h-screen overflow-y-auto flex-1 p-7">
        {children}
      </div>
    </div>
  );
};
