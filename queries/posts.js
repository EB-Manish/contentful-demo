import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
query Post {
    postCollection {
      items {
        title
        slug
        author {
          name
          photo {
            title
            url
            width
          }
        }
      }
    }
  }
  
`;
