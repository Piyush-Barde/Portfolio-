/*
  Turns an image path from siteData.js into something the browser can load.
  You don't need to edit this file.
*/

// Vite needs to know which images exist inside src/ at build time.
const srcImages = import.meta.glob(
  "./**/*.{jpg,jpeg,png,webp,avif,gif,svg,JPG,JPEG,PNG,WEBP,AVIF,GIF,SVG}",
  { eager: true, query: "?url", import: "default" }
);

export function resolveImage(path) {
  if (!path) return null;
  if (/^(https?:)?\/\//.test(path)) return path; // web address

  // Be forgiving: "./src/photo/x.png", "src/photo/x.png" and "photo/x.png" all mean "./photo/x.png".
  const inSrc = path.replace(/^\.?\/?src\//, "./");
  const key = inSrc.startsWith("./") ? inSrc : `./${inSrc.replace(/^\//, "")}`;
  if (srcImages[key]) return srcImages[key]; // image inside src/

  if (path.startsWith("/")) return path; // image inside public/

  console.warn(
    `Image not found: "${path}". Images available in src/: ${
      Object.keys(srcImages).join(", ") || "none"
    }`
  );
  return null;
}