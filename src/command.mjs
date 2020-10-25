import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

export const listTables = async (config, params) => {
  const client = new DynamoDBClient(config);
  return client.send(new ListTablesCommand(params));
};
