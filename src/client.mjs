import { DynamoDB } from "@aws-sdk/client-dynamodb";

export const listTables = async (config, params) => {
  const client = new DynamoDB(config);
  return client.listTables(params);
};
