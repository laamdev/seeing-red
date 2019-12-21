import axios from "axios";

export const getApiCall = url => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(err));
  });
};
