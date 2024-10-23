function TableHeader({ children }) {
  return (
    <thead className="dark:text-gray-200">
      <tr>{children}</tr>
    </thead>
  );
}

export default TableHeader;
