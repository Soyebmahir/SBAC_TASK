/* eslint-disable react/prop-types */
import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <tr>
        <th>Request for</th>
        <th>Approved By (Manager)</th>
        <th>Approved By (IT)</th>
        <th>Implement By</th>
        <th>Action</th>
      </tr>
      {data?.map((item) => (
        <tr key={item?._id}>
          <td>
            {Object?.keys(item?.accessType)?.map((access, index) => (
              <>
                {item[access] ? (
                  <>
                    <span key={index}>{access}</span>
                    <br />
                  </>
                ) : (
                  ""
                )}
              </>
            ))}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
