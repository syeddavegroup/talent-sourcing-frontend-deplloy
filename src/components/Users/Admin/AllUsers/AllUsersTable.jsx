import React, { useEffect, useState } from "react";
import axios from "axios";

import CustomTable from "../../../UI/Table/CustomTable";

import DUMMY_USERS from "../../../../data/dummyUsers";

const endpoints = [
  "https://talentsourcing-api.onrender.com/api/v1/client-on-boarding/personalInformation",
  "https://talentsourcing-api.onrender.com/api/v1/vendor-on-boarding/personalInformation",
  "https://talentsourcing-api.onrender.com/api/v1/developer-on-boarding/personalInfo",
];

const AllUsersTable = () => {
  const [clients, setClients] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(function (response) {
        // handle success
        setClients(response[0].data.data);
        setVendors(response[1].data.data);
        setDevelopers(response[2].data.data.info);
        // setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const users = [...vendors, ...developers, ...clients];
  console.log(users);

  return <CustomTable users={users} />;
};

export default AllUsersTable;
