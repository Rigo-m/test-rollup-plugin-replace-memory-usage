const rollup = require("rollup");
const replace = require("@rollup/plugin-replace");

const conf = {
  input: "index.js",
  output: {
    file: "dist/output.js",
    format: "cjs",
  },
  plugins: [
    // replace({
    //   preventAssignment: true,
    //   values: {
    //     lorem: "ipsum",
    //   },
    // }),
  ],
};

function logMemory(key) {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`Using ${Math.round(used * 100) / 100} MB`, key);
}

async function bundle() {
  logMemory("before");
  const bundler = await rollup.rollup(conf);
  logMemory("after rollup");
  await bundler.write(conf);
  logMemory("after write");
}

bundle();
