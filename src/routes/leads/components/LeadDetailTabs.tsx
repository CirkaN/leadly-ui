const LeadDetailTabs = () => {
  return (
    <ul className="flex flex-col md:flex-row text-sm font-medium text-center border-t border-white dark:border-gray-500 text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
      <li className="w-full">
        <a
          href="#"
          className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
          aria-current="page"
        >
          Profile
        </a>
      </li>
      <li className="w-full">
        <a
          href="#"
          className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          Activity Log
        </a>
      </li>
      <li className="w-full">
        <a
          href="#"
          className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          Notes
        </a>
      </li>
      <li className="w-full">
        <a
          href="#"
          className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          Emails
        </a>
      </li>
      <li className="w-full">
        <a
          href="#"
          className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          Calls
        </a>
      </li>
      <li className="w-full">
        <a
          href="#"
          className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          Tasks
        </a>
      </li>
      <li className="w-full">
        <a
          href="#"
          className="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          Meetings
        </a>
      </li>
    </ul>
  );
};
export default LeadDetailTabs;
