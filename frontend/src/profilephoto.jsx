import { useState } from "react";
import "./ProfilePhoto.css";
import { resolveImage } from "./image.js";
import { site } from "./sitedata.js";

// The photo and name come from siteData.js, so this file doesn't need editing.
const photo = resolveImage(site.photo);

function ProfilePhoto() {
  const [failed, setFailed] = useState(!photo);

  return (
    <div className="pp">
      <div className="pp-frame">
        {failed ? (
          <div
            className="pp-fallback"
            role="img"
            aria-label={`${site.firstName} ${site.lastName}`}
          >
            {site.initials}
            <span>.</span>
          </div>
        ) : (
          <img
            className="pp-img"
            src={photo}
            alt={`Portrait of ${site.firstName} ${site.lastName}`}
            onError={() => setFailed(true)}
          />
        )}
        <span className="pp-corner pp-tl" />
        <span className="pp-corner pp-br" />
      </div>
    </div>
  );
}

export default ProfilePhoto;