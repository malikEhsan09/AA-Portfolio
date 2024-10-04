function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <a
          href="https://github.com/malikEhsan09"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          React & Tailwind CSS Portfolio
        </a>
        .
        <a
          href="/"
          target="__blank"
          className="text-secondary-dark dark:text-secondary-light  uppercase  hover:text-indigo-600 dark:hover:text-indigo-500 ml-1 duration-500 font-bold no-underline hover:no-underline"
        >
          Amina
        </a>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
