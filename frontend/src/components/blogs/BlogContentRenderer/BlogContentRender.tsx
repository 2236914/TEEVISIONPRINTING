import React from 'react';
import Image from 'next/image';

import { parseHtmlContent } from '@/utilities/helpers/processHtmlImages';

interface BlogContentRendererProps {
  content: string;
  className?: string;
}

const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({
  content,
  className = '',
}) => {
  const { textParts, images } = parseHtmlContent(content);

  return (
    <div className={className}>
      {textParts.map((part, index) => (
        <React.Fragment key={index}>
          {part && <div dangerouslySetInnerHTML={{ __html: part }} />}
          {images[index] && (
            <div className="relative w-full my-6">
              <Image
                src={images[index].src}
                alt={images[index].alt}
                width={50}
                height={50}
                sizes="(max-width: 768px) 100vw, 800px"
                className="rounded-lg object-cover w-full h-auto"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
    // <div className={className}>
    //   <div className="" dangerouslySetInnerHTML={{ __html: content }} />
    // </div>
  );
};

export default BlogContentRenderer;
