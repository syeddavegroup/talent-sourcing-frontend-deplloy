export const developerPersonalAPI = async (data) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/developer-on-boarding/personalInfo`,
    {
      mode: 'no-cors',
      method: 'post',
      headers: {
        // Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  const resData = await res.json();
  console.log(resData);
};
