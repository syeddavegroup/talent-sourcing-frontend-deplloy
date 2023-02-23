import axios from 'axios';

export const developerPersonalAPI = async (data) => {
  axios
    .post(
      `http://www.localhost:3000/api/v1/developer-on-boarding/personalInfo`,
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
    .catch((err) => console.log(err.response.data.message));
};
