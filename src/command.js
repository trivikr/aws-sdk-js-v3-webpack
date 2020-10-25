const { DynamoDB, ListTablesCommand } = require("@aws-sdk/client-dynamodb");

export const listTables = async (config, params) => {
  const client = new DynamoDB(config);
  return client.send(new ListTablesCommand(params));
};
