const SubHeader = ({ title }: { title: string }) => (
  <div className="relative flex items-center w-full my-8">
    <div className="w-full border-t border-gray-200 dark:border-gray-700" />
    <span className="absolute left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 px-3 text-sm text-gray-500 dark:text-gray-400">
      {title}
    </span>
  </div>
);

export { SubHeader };
