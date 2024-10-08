const POST_GRAPHQL_FIELDS = `
slug
title
featuredImage {
  url
}
author {
  name
  avatar {
    url
  }
}
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`;

const CATEGORY_GRAPHQL_FIELDS = `
id
      name
      description {
        json
      }
      photo {
        url
      }`;

const CAROUSEL_GRAPHQL_FIELDS = `
title
subtitle
buttonTxt
image {
  url
}
displayOrder`;

const PRODUCT_GRAPHQL_FIELDS =`
name
price
oldPrice
description
featuredProductImage{
  url
}
productImagesCollection{
  items{
    url
  }
}
new
sale`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.pageBlogPostCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractPost(entry);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${preview ? "true" : "false"
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      pageBlogPostCollection(where: { slug_exists: true }, preview: ${isDraftMode ? "true" : "false"
    }) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );
  console.log(entries, 'entries');

  return extractPostEntries(entries);
}

export async function getAllCategories(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection(order:sys_firstPublishedAt_ASC) {
        items {
          ${CATEGORY_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  console.log(entries, 'categories');

  return extractCategoriesEntries(entries);
}
function extractCategoriesEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.categoryCollection?.items;
}
export async function getAllHomeCarousels(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      homeCarouselCollection(order:displayOrder_ASC) {
        items {
          ${CAROUSEL_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  console.log(entries);
  return extractHomeCarouselsEntries(entries);
}
function extractHomeCarouselsEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.homeCarouselCollection?.items;
}

export async function getAllProducts(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      pageProductCollection {
        items {
          ${PRODUCT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  console.log(entries);
  return extractProductsEntries(entries);
}
function extractProductsEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.pageProductCollection?.items;
}


