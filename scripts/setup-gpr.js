const fs = require("fs");

const package = JSON.parse(fs.readFileSync("./package.json", "utf8"));
package.name = "@seancroach/" + package.name;
fs.writeFileSync("./package.json", JSON.stringify(package));
