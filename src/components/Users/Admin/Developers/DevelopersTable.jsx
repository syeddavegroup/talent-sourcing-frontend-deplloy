import React, { useEffect, useState } from "react";
import axios from "axios";

import CustomTable from "../../../UI/Table/CustomTable";

import DUMMY_USERS from "../../../../data/dummyUsers";

const ClientsTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://testing2-ihn1.onrender.com/users")
      .then(function (response) {
        // handle success
        setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const developers = users.filter((user) =>
    user.role.toLowerCase().includes("developer")
  );

  return <CustomTable users={developers} />;
};

export default ClientsTable;
