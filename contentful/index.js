import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CLIENT_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CLIENT_ACCESS_TOKEN,
});

export default client;
