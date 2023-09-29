import { Api } from "./api";

const api = new Api({
  baseUrl: "https://api-tv2l.onrender.com",
  baseApiParams: {
    secure: true,
  },
  securityWorker: async (securityData) => {
    if (securityData) {
      return {
        headers: {
          Authorization: `Bearer ${securityData}`,
        },
      };
    }
  },
});

export const client = api;
