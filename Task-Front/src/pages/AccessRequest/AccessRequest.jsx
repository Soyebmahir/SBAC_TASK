import { useContext, useEffect, useState } from "react";

import Table from "../../Component/Table/Table";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { baseURL } from "../../Configs/libs";

const AccessRequest = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/formData`)
      .then((res) => res.json())
      .then((data) => setData(data?.data));
  }, []);
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default AccessRequest;
