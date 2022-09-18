import React from "react";

function Image({ src , functions }) {
	return <img onClick={functions} src={src} />;
}

export default Image;
