const fs = require("fs");
const path = require("path");

console.log("📁 Copying hosting configuration files...");

const filesToCopy = [
  { src: "public/404.html", dest: "out/404.html" },
  { src: "public/_redirects", dest: "out/_redirects" },
  { src: "public/.htaccess", dest: "out/.htaccess" },
];

filesToCopy.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${src} to ${dest}`);
  } else {
    console.log(`⚠️  ${src} not found, skipping...`);
  }
});

console.log("🎉 Hosting configuration files copied successfully!");
