import { baseAPI } from "./base-api";

const getAllMember = async () => {
  return baseAPI.post("", {
    query: `{
            members {
              id
              name
              nickname
              profile {
                url
              }
            }
          }
        `,
  });
};

const queries = {
  getAllMember: getAllMember,
};

export default queries;
