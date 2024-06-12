interface ParagraphsProps {
  paragraph: string;
}

const Paragraphs = ({ paragraph }: ParagraphsProps) => {
  return <p className="px-0 py-2">{paragraph}</p>;
};

export default Paragraphs;
