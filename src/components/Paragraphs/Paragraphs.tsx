interface ParagraphsProps {
  paragraph: string;
}

export const Paragraphs = ({ paragraph }: ParagraphsProps) => {
  return <p className="px-0 py-2">{paragraph}</p>;
};
