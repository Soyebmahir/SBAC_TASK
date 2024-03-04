/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
  const navigate = useNavigate();
  const changePage = (id) => {
    navigate(`/form_edit/${id}`);
  };
  return (
    <table className="w-[70%] mx-auto">
      <tr className="space-x-3 border">
        <th className="ml-4 border">Request for</th>
        <th className="ml-4 border">Approved By (Manager)</th>
        <th className="ml-4 border">Approved By (IT)</th>
        <th className="ml-4 border">Implement By</th>
        <th className="ml-4 border">Action</th>
      </tr>
      {data?.map((item) => (
        <tr key={item?._id}>
          <td className="border ">
            {Object?.keys(item?.accessType)?.map((access, index) => (
              <>
                {item.accessType[access] && access !== "_id" ? (
                  <>
                    <span className="pr-1" key={index}>
                      {access},
                    </span>
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
          </td>
          <td className="border ">
            {item?.managerSignature ? (
              <span className="bg-green-500 px-2">Approved</span>
            ) : (
              "Pending"
            )}
          </td>
          <td className="border  ">
            {item?.itSignature ? (
              <span className="bg-green-500 px-2">Approved</span>
            ) : (
              "Pending"
            )}
          </td>
          <td className="border ">
            {item?.itImplement ? (
              <span className="bg-green-500 px-2">Approved</span>
            ) : (
              "Pending"
            )}
          </td>
          <td
            className="border flex justify-center "
            onClick={() => changePage(item._id)}
          >
            <button className="bg-pink-500 text-white hover:text-black px-2 rounded">
              Show Details
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
