import { useEffect, useState } from "react";

const read = () => window.location.hash;

export function useHash() {
  const [hash, setHash] = useState(read);
  useEffect(() => {
    const update = () => setHash(read());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return hash;
}

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const projectSlug = (project) => project.slug || slugify(project.title);
export const casePath = (project) => `#/project/${projectSlug(project)}`;

export function slugFromHash(hash) {
  const match = /^#\/project\/([^/?#]+)/.exec(hash);
  return match ? decodeURIComponent(match[1]) : null;
}