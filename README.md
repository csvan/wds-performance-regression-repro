Webpack Dev Server performance regression

To test, run

`npm run server:dev` to run the webpack dev server, and
`npm run build:dev` to run a regular build with the exact same config

Example outputs from my system:

Server: 5050 ms building
Build: 1146 ms building

This difference is MUCH more tangible on larger projects, where we are seeing slowdowns of 30-40x the previous speed.
