import { baseAPI } from "./base-api";

const getAllMember = async () => {
  return baseAPI.post("", {
    query: `{
            members(orderBy: order_ASC) {
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

const getAllImages = async () => {
  return baseAPI.post("", {
    query: `{
      galleries {
        image {
          id
          url
        }
      }
    }
    `,
  });
};

const queries = {
  getAllMember: getAllMember,
  getAllImages: getAllImages,
};

export default queries;
