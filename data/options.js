import Image from "next/image";

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
    "embedded-asset-block": (node) => (
      <div className="rich-text ">
        <Image
          fill
          src={`http:${node.data.target.fields.file.url}`}
          alt="preview"
        />
      </div>
    ),
    renderText: (text) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  },
};
