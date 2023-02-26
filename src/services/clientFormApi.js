import axios from 'axios';

export const clientPersonalAPI = (data) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/v1/client-on-boarding/personalInformation`,
      JSON.stringify(data),
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => res)
    .then((data) => {
      localStorage.removeItem('clientInfo');
      localStorage.setItem('clientInfo', JSON.stringify(data.data.data._id));
    })
    .catch((err) => console.log(err));
};

export const clientCompanyInfoAPI = (data) => {
  const personalInformationId = JSON.parse(localStorage.getItem('clientInfo'));
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/v1/client-on-boarding/company-information/${personalInformationId}`,
      JSON.stringify(data),
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => res)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
