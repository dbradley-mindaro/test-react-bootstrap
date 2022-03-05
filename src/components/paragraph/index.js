import React from "react";

const Paragraph = ({ title, content, ...prop }) => {
  return (
    <div {...prop}>
      {React.isValidElement(title) ? (
        title
      ) : (
        <h4 className="text-dark">{title}</h4>
      )}
      {React.isValidElement(content) ? (
        content
      ) : (
        <p className="text-secondary">{content}</p>
      )}
    </div>
  );
};

export default Paragraph;
