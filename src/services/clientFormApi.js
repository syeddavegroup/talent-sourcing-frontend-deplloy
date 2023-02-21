import axios from 'axios';

export const clientPersonalAPI = async (data) => {
  axios
    .post(
      `http://localhost:3000/api/v1/client-on-boarding/personalInfo`,
      JSON.stringify(data),
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => res)
    .catch((err) => console.log(err.response.data.message));
};
