module.exports = {
  target: "node",
  entry: {
    client: "./src/client.mjs",
    command: "./src/command.mjs",
  },
  output: {
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
};
