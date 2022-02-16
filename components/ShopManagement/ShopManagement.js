const ShopManagement = () => {
  return (
    <div className="container mx-auto bg-gray-100 rounded-lg p-5">
      <h1 className="text-center mb-5 text-3xl text-green-500 font-serif">
        ALL Shop Information
      </h1>
      <section className="">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                No.
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Type of shop
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                {" "}
                <a href="#" className="font-bold text-blue-500 hover:underline">
                  10001
                </a>{" "}
              </td>
              <td className="p-3 text-sm text-gray-700">ABC store</td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  delivered
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">Electronics</td>
              <td className="p-3 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700">
                {" "}
                <a href="#" className="font-bold text-blue-500 hover:underline">
                  10002
                </a>{" "}
              </td>
              <td className="p-3 text-sm text-gray-700">ABC store</td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  pending
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">Electronics</td>
              <td className="p-3 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                {" "}
                <a href="#" className="font-bold text-blue-500 hover:underline">
                  10003
                </a>{" "}
              </td>
              <td className="p-3 text-sm text-gray-700">ABC store</td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  delivered
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">Electronics</td>
              <td className="p-3 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="p-3 text-sm text-gray-700">
                {" "}
                <a href="#" className="font-bold text-blue-500 hover:underline">
                  10004
                </a>{" "}
              </td>
              <td className="p-3 text-sm text-gray-700">ABC store</td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  pending
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">Electronics</td>
              <td className="p-3 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 text-sm text-gray-700">
                {" "}
                <a href="#" className="font-bold text-blue-500 hover:underline">
                  10005
                </a>{" "}
              </td>
              <td className="p-3 text-sm text-gray-700">ABC store</td>
              <td className="p-3 text-sm text-gray-700">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                  cancelled
                </span>
              </td>
              <td className="p-3 text-sm text-gray-700">Electronics</td>
              <td className="p-3 text-sm text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ShopManagement;
