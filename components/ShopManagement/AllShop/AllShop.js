const AllShop = () => {
  return (
    <div className="container mx-auto bg-gray-100 rounded-lg p-5 my-10">
      <h1 className="text-center mb-5 text-3xl text-green-500 font-serif">
        ALL Shop Information
      </h1>
      <section className="overflow-auto p-2">
        <div>
          <div className="w-full inline">
            <select
              className="py-2 px-3 w-1/5 border border-green-300 rounded mr-3 mb-3"
              name="businessType"
            >
              <option value="" selected disabled>
                Type Of Business
              </option>
              <option value="allShop">ALL Shop</option>
              <option value="shop">Shop</option>
              <option value="vendor">Vendor</option>
              <option value="enterprise">Enterprise</option>
              <option value="seriesStores">Series Stores</option>
              <option value="brands">Brands</option>
            </select>
            <select
              className="w-1/5 py-2 px-3 border border-green-300 rounded mr-3 mb-3"
              name="shopType"
              id="shopType"
            >
              <option value="" selected disabled>
                Type Of Shop
              </option>
              <option value="allShop">ALL Shop</option>
              <option value="shop">Shop</option>
              <option value="vendor">Vendor</option>
              <option value="enterprise">Enterprise</option>
              <option value="seriesStores">Series Stores</option>
              <option value="brands">Brands</option>
            </select>
            <select
              className="w-1/6 py-2 px-3 border border-green-300 rounded mr-3 mb-3"
              name="status"
              id="status"
            >
              <option value="" selected disabled>
                Status
              </option>
              <option value="registered">Registered</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="suspended">Suspended</option>
            </select>
            <select
              className="w-1/5 py-2 px-3 border border-green-300 rounded mr-3 mb-3"
              name="dateRange"
              id="dateRange"
            >
              <option value="" selected disabled>
                Date
              </option>
              <option value="registered">Registered</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="suspended">Suspended</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-300 text-lg font-serif font-bold rounded px-5 py-2 float-right"
          >
            Filter
          </button>
        </div>
        <table className="w-full rounded-lg shadow ">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                ID No.
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Date
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Status
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Type of shop
              </th>
              <th className="p-3 text-lg font-semibold tracking-wide text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="bg-white">
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <input
                  type="checkbox"
                  id="10001"
                  name="shopName"
                  value="10001"
                  className="h-3.5 w-4"
                ></input>
                <label className="ml-2 font-bold text-blue-500" htmlFor="10001">
                  10001
                </label>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                ABC store
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                16/02/2022
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  delivered
                </span>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                Electronics
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
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
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <input
                  type="checkbox"
                  id="10002"
                  name="shopName"
                  value="10002"
                  className="h-3.5 w-4"
                ></input>
                <label className="ml-2 font-bold text-blue-500" htmlFor="10002">
                  10002
                </label>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                DEF store
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                10/02/2022
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  pending
                </span>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                Cosmetics
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
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
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <input
                  type="checkbox"
                  id="10003"
                  name="shopName"
                  value="10003"
                  className="h-3.5 w-4"
                ></input>
                <label className="ml-2 font-bold text-blue-500" htmlFor="10003">
                  10003
                </label>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                TEST store
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                22/01/2022
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  delivered
                </span>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                Electronics
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
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
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <input
                  type="checkbox"
                  id="10004"
                  name="shopName"
                  value="10004"
                  className="h-3.5 w-4"
                ></input>
                <label className="ml-2 font-bold text-blue-500" htmlFor="10004">
                  10004
                </label>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                XYZ store
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                10/02/2022
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                  pending
                </span>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                Sports
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
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
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <input
                  type="checkbox"
                  id="10005"
                  name="shopName"
                  value="10005"
                  className="h-3.5 w-4"
                ></input>
                <label className="ml-2 font-bold text-blue-500" htmlFor="10005">
                  10005
                </label>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                DEMO store
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                01/01/2022
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                <span className="p-1.5 text-xm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
                  cancelled
                </span>
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
                Varity Store
              </td>
              <td className="p-3 text-lg text-gray-700 whitespace-nowrap">
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

export default AllShop;
