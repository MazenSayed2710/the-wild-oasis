function Button({ children, onClick = () => {}, disable = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className="w-[400px] rounded-md bg-violet-600 px-5 py-3 font-bold text-gray-200 dark:text-gray-200"
    >
      {children}
    </button>
  );
}

export default Button;
