import * as React from "react";
import { UrlData } from "../../UrlData/UrlData";
import { Link } from "react-router-dom";
import { serverUrl } from "../../helpers/Constants";
import axios from "axios";

interface IDataTableProps {
  data: UrlData[];
  updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = ({ data, updateReloadState }) => {
  console.log("Data in DataTable is :", data);

  const copyToClipBoard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${serverUrl}/shortUrl/${url}`);
      alert(`URL copied: ${serverUrl}/shortUrl/${url}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUrl = async (id: string) => {
    const response = await axios.delete(`${serverUrl}/shortUrl/${id}`);
    console.log(response);
    updateReloadState();
  };

  return (
    <div className="container mx-auto pt-2 pb-10 relative min-h-screen">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute xl:w-[520px] xl:h-[520px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] bg-grad-theme-135 blur-[70px] rounded-full top-[15%] left-0"></div>
        <div className="absolute xl:w-[520px] xl:h-[520px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] bg-grad-theme-135 blur-[70px] rounded-full bottom-[10%] right-0"></div>
      </div>

      {/* Table Container */}
      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg bg-banner p-6 rounded-2xl">
        <table className="w-full text-xs sm:text-sm text-left text-gray-300">
          <thead className="text-md uppercase text-white bg-gray-800 rounded-lg">
            <tr>
              <th scope="col" className="px-4 sm:px-6 py-3 sm:py-4 w-6/12">Full URL</th>
              <th scope="col" className="px-4 sm:px-6 py-3 sm:py-4 w-3/12">Short URL</th>
              <th scope="col" className="px-4 sm:px-6 py-3 sm:py-4 text-center">Clicks</th>
              <th scope="col" className="px-4 sm:px-6 py-3 sm:py-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-b border-gray-900">
                <td className="px-4 sm:px-6 py-3 break-all">
                  <Link to={item.fullUrl} target="_blank" rel="noreferrer noopener" className="text-white hover:text-pink-400">
                    {item.fullUrl}
                  </Link>
                </td>
                <td className="px-4 sm:px-6 py-3 break-all">
                  <Link to={`${serverUrl}/shortUrl/${item.shortUrl}`} target="_blank" rel="noreferrer noopener" className="text-white hover:text-pink-400">
                    {item.shortUrl}
                  </Link>
                </td>
                <td className="px-4 sm:px-6 py-3 text-center">{item.clicks}</td>
                <td className="px-4 sm:px-6 py-3">
                  <div className="flex space-x-2 sm:space-x-4 justify-center">
                    {/* Copy Button */}
                    <button onClick={() => copyToClipBoard(item.shortUrl)} className="hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-risd-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"/>
                      </svg>
                    </button>
                    {/* Delete Button */}
                    <button onClick={() => deleteUrl(item._id)} className="hover:scale-110 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
