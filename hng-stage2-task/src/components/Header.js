import React from 'react'

function Header() {
  return (
    <header className="h-[128px] border relative border-black w-full">
      <section className='flex items-center h-[80px]'>
        <div className="text-2xl ">
          <span className='absolute top-[5.92px] left-[5.67px]'>J</span>
          <span className='absolute top'>T</span>
        </div>
        <div>
          <h1>John Turner</h1>
        </div>
      </section>
    </header>
  );
}

export default Header