/*
  Logos for the Skills section. Three sources, checked in this order:
  1) Your own image files in  src/skills/  (power-bi.svg, spss.png ...)
  2) Brand logos from the simple-icons package (listed in `icons`)
  3) Drawn icons for ideas without a brand logo (listed in `concepts`)
  Anything else gets a small letter badge.

  To add a brand logo: import it below (find names at https://simpleicons.org,
  the import is "si" + the name, e.g. siDocker) and add a line to `icons`.
*/
import {
  siPython, siMysql, siR, siOpenjdk, siC, siJavascript, siScikitlearn,
  siHuggingface, siPandas, siNumpy, siGit, siGithub, siGooglecloud,
  siFigma, siReact, siHtml5, siCss, siBootstrap, siTensorflow, siPytorch,
  siPostgresql, siFastapi, siSpringboot, siRender, siPlotly, siStreamlit,
  siKeras, siSqlite, siJupyter, siDocker, siNodedotjs, siMongodb, siFlask,
} from "simple-icons";

/*
  Your own logo files: put an image in  src/skills/  and name it after the
  skill, e.g.  power-bi.svg,  spss.png,  amazon-web-services.svg.
  Capitals and spaces don't matter ("Power BI" -> power-bi). A file here
  always wins over the built-in logos below. svg, png, webp or jpg all work.
*/
const files = import.meta.glob("../skills/*.{svg,png,webp,jpg,jpeg}", {
  eager: true,
  query: "?url",
  import: "default",
});
const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const custom = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [slug(path.split("/").pop().replace(/\.[^.]+$/, "")), url])
);

const icons = {
  python: siPython,
  mysql: siMysql,
  r: siR,
  java: siOpenjdk,
  c: siC,
  javascript: siJavascript,
  "scikit-learn": siScikitlearn,
  "transformers (hugging face)": siHuggingface,
  "hugging face": siHuggingface,
  pandas: siPandas,
  numpy: siNumpy,
  git: siGit,
  github: siGithub,
  "google cloud platform": siGooglecloud,
  figma: siFigma,
  react: siReact,
  html: siHtml5,
  css: siCss,
  bootstrap: siBootstrap,
  tensorflow: siTensorflow,
  pytorch: siPytorch,
  postgresql: siPostgresql,
  fastapi: siFastapi,
  "spring boot": siSpringboot,
  render: siRender,
  plotly: siPlotly,
  streamlit: siStreamlit,
  keras: siKeras,
  sqlite: siSqlite,
  jupyter: siJupyter,
  docker: siDocker,
  "node.js": siNodedotjs,
  mongodb: siMongodb,
  flask: siFlask,
};

/*
  Skills with no brand logo get a simple drawn icon for the idea instead.
  Add a skill name (lowercase) on the left and pick an icon on the right:
  database, network, layers, trend, bars, tree, cloud, sparkle, table.
*/
const dot = (x, y, r = 1.7) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

const drawn = {
  database: "M5 6c0 1.7 3.1 3 7 3s7-1.3 7-3-3.1-3-7-3-7 1.3-7 3ZM5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3",
  network: `M4 7l8-3M4 7l8 5M4 17l8-5M4 17l8 3M12 4l8 3M12 12l8-5M12 12l8 5M12 20l8-3${dot(4, 7, 1.5)}${dot(4, 17, 1.5)}${dot(12, 4, 1.5)}${dot(12, 12, 1.5)}${dot(12, 20, 1.5)}${dot(20, 7, 1.5)}${dot(20, 17, 1.5)}`,
  layers: "M12 3 3 8l9 5 9-5-9-5ZM3 12.5l9 5 9-5M3 17l9 5 9-5",
  trend: "M3 20h18M4 16l5-5 4 3 7-8M15 6h5v5",
  bars: "M5 20V11M12 20V4M19 20v-6M3 20h18",
  tree: `M12 7v3M12 10H6v3M12 10h6v3M6 16v2M18 16v2${dot(12, 5, 2)}${dot(6, 15, 2)}${dot(18, 15, 2)}${dot(6, 20, 2)}${dot(18, 20, 2)}`,
  cloud: "M7 18a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 9.5 4.5 4.5 0 0 1 17.5 18H7Z",
  sparkle: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z",
  table: "M3 5h18v14H3ZM3 10h18M3 15h18M9 5v14",
};

const concepts = {
  sql: "database",
  "artificial intelligence": "sparkle",
  ai: "sparkle",
  "machine learning": "trend",
  "deep learning": "layers",
  "neural networks": "network",
  xgboost: "tree",
  "random forest": "tree",
  seaborn: "bars",
  matplotlib: "bars",
  "power bi": "bars",
  tableau: "bars",
  spss: "table",
  excel: "table",
  "amazon web services": "cloud",
  aws: "cloud",
};

// Brand colours that are too dark to see on a dark page become light.
function readable(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.3 ? "#f4f1ec" : `#${hex}`;
}

// Returns { src } for your own image file, { path, color } for a brand logo,
// { path, line: true } for a drawn icon, or null (then a letter badge shows).
// allowFile = false skips your own files (used when an image fails to load).
export function getSkillIcon(name, allowFile = true) {
  if (allowFile && custom[slug(name)]) return { src: custom[slug(name)] };
  const key = name.toLowerCase();
  const icon = icons[key];
  if (icon) return { path: icon.path, color: readable(icon.hex) };
  const concept = drawn[concepts[key]];
  return concept ? { path: concept, line: true } : null;
}