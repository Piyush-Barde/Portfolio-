/*
  Logos for the Skills section. A skill whose name is listed here gets its
  logo; any other skill (e.g. "Machine Learning") gets a small letter badge.

  To add a logo:  1) import it below (find names at https://simpleicons.org,
                     the import is "si" + the name, e.g. siDocker)
                  2) add a line to `icons`: the skill name in lowercase.
*/
import {
  siPython, siMysql, siR, siOpenjdk, siC, siJavascript, siScikitlearn,
  siHuggingface, siPandas, siNumpy, siGit, siGithub, siGooglecloud,
  siFigma, siReact, siHtml5, siCss, siBootstrap, siTensorflow, siPytorch,
  siPostgresql, siFastapi, siSpringboot, siRender,
} from "simple-icons";

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
};

// Brand colours that are too dark to see on a dark page become light.
function readable(hex) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.3 ? "#f4f1ec" : `#${hex}`;
}

export function getSkillIcon(name) {
  const icon = icons[name.toLowerCase()];
  return icon ? { path: icon.path, color: readable(icon.hex) } : null;
}