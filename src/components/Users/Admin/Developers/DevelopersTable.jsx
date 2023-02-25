import React, { useEffect, useState } from "react";
import axios from "axios";

import CustomTable from "../../../UI/Table/CustomTable";

import DUMMY_USERS from "../../../../data/dummyUsers";

const ClientsTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://talentsourcing-api.onrender.com/api/v1/developer-on-boarding/personalInfo"
      )
      .then(function (response) {
        // handle success
        setUsers(response.data.data.info);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return <CustomTable users={users} />;
};

export default ClientsTable;
