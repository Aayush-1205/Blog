import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";

const getAllBlogDom = async () => {
  const query = gql`
    query MyQuery {
      blogDoms(orderBy: createdAt_DESC) {
        blogUrl
        title
        tags
        subTitle
        description
        createdAt
        banner {
          url
        }
        id
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getBlogById = async (blogId) => {
  const query =
    gql`
    query MyQuery {
  blogDom(where: {blogUrl: "` +
    blogId +
    `"}) {
    blogUrl
    description
    id
    subTitle
    tags
    title
    createdAt
    banner {
      url
    }
    videos {
      url
      fileName
    }
  }
}
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBlogBySearch = async (searchById) => {
  const query =
    gql`
      query MyQuery {
  blogDoms(where: {_search: "` +
    searchById +
    `"}) {
    id
    title
    subTitle
    blogUrl
    banner {
      url
    }
  }
}
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getAllBlogDom,
  getBlogById,
  getBlogBySearch,
};
