const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const webpackConfig = require(path.join(
  process.cwd(),
  "config",
  "webpack.dev.js"
));

const devServerOptions = {
  open: false,
  dev: {
    publicPath: "/",
  },
  hot: false,
  liveReload: true,
  compress: true,
};

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(1337, "localhost", () => {
  console.log(`Starting server on http://localhost:1337`);
});
