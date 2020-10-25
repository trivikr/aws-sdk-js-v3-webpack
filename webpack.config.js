module.exports = {
  target: "node",
  entry: {
    client: "./src/client.js",
    command: "./src/command.js",
  },
  output: {
    filename: "[name].js",
  },
};
