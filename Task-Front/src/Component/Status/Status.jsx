import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { baseURL } from "../../Configs/libs";
import Table from "../Table/Table";

const Status = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/formData/${user._id}`)
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default Status;
