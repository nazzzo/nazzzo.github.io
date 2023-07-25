import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const ProjectDetail = ({ details }: { details: string }) => {
  return (
    <div className="relative w-[372px] md-[460px] lg:w-[600px] max-w-md px-3 py-6">
      <div className="prose max-h-[70%] overflow-scroll">
        <ReactMarkdown className="dark:text-white" rehypePlugins={[rehypeRaw]}>{details}</ReactMarkdown>
      </div>
    </div>
  );
};