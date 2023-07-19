import Zoom from "react-medium-image-zoom";

export const optionsDate = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour24: true,
  day: "numeric",
};

export const optionsText = {
  renderNode: {
    "embedded-asset-block": (node) => {
      const imageUrl = node.data.target.fields.file.url;
      const imageTitle = node.data.target.fields.title;
      return (
        <div className="rich-text">
          <Zoom>
            <img
              alt={`http:${imageTitle}`}
              src={`http:${imageUrl}`}
              className="rich-text__image"
            />
          </Zoom>
        </div>
      );
    },
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  },
};
