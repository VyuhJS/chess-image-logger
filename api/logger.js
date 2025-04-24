export default async function handler(req, res) {
  console.log("📸 Image ping received:");
  console.log({
    headers: req.headers,
    ip: req.socket.remoteAddress,
    url: req.url,
    time: new Date().toISOString(),
  });

  const fs = require("fs");
  const path = require("path");

  const imagePath = path.resolve("public", "poc.png");
  const imageBuffer = fs.readFileSync(imagePath);

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(imageBuffer);
}
