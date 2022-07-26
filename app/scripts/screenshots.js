const fs = require("fs");
const screenshotsFolder =
  process.env.HOME + "/AppData/Roaming/.fyremc.hu/game/screenshots";
const fileNames = [];

const now = new Date();
fs.readdirSync(screenshotsFolder).forEach((file) => {
  file = file
    .replaceAll(".png", "")
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replaceAll(".", " ");
  file = file.split(" ");
  let date = new Date(file[0], file[1], file[2], file[3], file[4], file[5]);
  let msBetween = Math.abs(date.getTime() - now.getTime());
  let daysBetween = msBetween / (24 * 60 * 60 * 1000);
  if (daysBetween <= 2) {
    fileNames.push(date);
  }
});

let asd = new Date(fileNames[0]);
