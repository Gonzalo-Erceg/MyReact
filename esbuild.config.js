const esbuild = require("esbuild");

const fs = require("fs");
const path = require("path");

function copyFiles() {
  const publicDir = path.join(__dirname, "public");
  const distDir = path.join(__dirname, "dist");

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync("dist");
  }
  fs.readdirSync(publicDir).forEach((file) => {
    const srcPath = path.join(publicDir, file);
    const destPath = path.join(distDir, file);

    if (fs.statSync(srcPath).isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      fs.readdirSync(srcPath).forEach((innerFile) => {
        fs.copyFileSync(
          path.join(srcPath, innerFile),
          path.join(destPath, innerFile)
        );
      });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}
copyFiles();

esbuild.build({
  entryPoints: ["./src/index.jsx"],
  bundle: true,
  format: "iife",
  outfile: "./dist/bundle.js",
  jsxFactory: "MyReact.createElement",
  loader: {
    ".js": "jsx",
  },
});
