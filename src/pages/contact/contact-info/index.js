import Paragraph from "../../../components/paragraph";

const ContactInfo = () => {
  return (
    <>
      <Paragraph
        title="Location:"
        content="A108 Adam Street, New York, NY 535022"
      />
      <Paragraph className="mt-4" title="Email:" content="info@example.com" />
      <Paragraph className="mt-4" title="Call:" content="+1 5589 55488 55s" />
    </>
  );
};

export default ContactInfo;
