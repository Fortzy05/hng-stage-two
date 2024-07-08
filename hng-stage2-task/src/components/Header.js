import React from "react";


function Header() {
  return (
    <header className="h-[128px] bg-[#f4f4f479] flex justify-between py-10 px-20 items-center w-full">
      <section className="flex items-center h-[80px]">
        <div className="pl-2 pr-20 flex items-center font-bold">
          <img src="/logo.svg" />
        </div>
        <ul className="flex gap-[60px]">
          <li className="hover:text-[#AC702F] flex items-center gap-1">
            Brands
            <span>
              <img src="/down_arrow.svg" alt="arrow facing downward" />
            </span>
          </li>
          <li className="hover:text-[#AC702F]">Inspirations</li>
          <li className="hover:text-[#AC702F] flex gap-1 items-center">
            Categories
            <span>
              <img src="/down_arrow.svg" alt="arrow facing downward" />
            </span>
          </li>
          <li className="hover:text-[#AC702F]">Sale</li>
        </ul>
      </section>

      <div className="md:border md:w-[8rem] rounded-lg py-1 px-4 border-[#E2E8F0] bg-transparent flex items-center gap-3">
        <img src="/search.svg" alt="search icon" className="md:w-5 w-8 " />
        <input
          className="w-full outline-none md:block hidden "
          type="text"
          placeholder="search"
        />
      </div>
    </header>
  );
}

export default Header;
