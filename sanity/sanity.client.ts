import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,
    apiVersion: "2023-10-21",
    useCdn: false,
};

const client = createClient(config);

export default client;