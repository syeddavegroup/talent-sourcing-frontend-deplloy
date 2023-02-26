import axios from 'axios';

export const vendorPersonalAPI = async (data) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}api/v1/vendor-on-boarding/personalInformation`,
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
