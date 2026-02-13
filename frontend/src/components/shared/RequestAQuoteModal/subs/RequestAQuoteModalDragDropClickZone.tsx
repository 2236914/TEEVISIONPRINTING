import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

import DocumentIcon from '@/utilities/SVGs/Document';

type PropTypes = {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
};

const RequestAQuoteModalDragDropClickZone: React.FC<PropTypes> = ({
  files,
  setFiles,
}) => {
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } = useDropzone({
    // Don't specify accept at all - let the validator handle everything
    multiple: true,
    maxSize: 20 * 1024 * 1024, // 20MB per file
    validator: (file) => {
      const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.pdf', '.ai', '.eps', '.psd'];
      const fileName = file.name.toLowerCase();
      const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
      
      if (!hasValidExtension) {
        return {
          code: 'invalid-file-type',
          message: `File type not supported. Allowed: ${allowedExtensions.join(', ')}`
        };
      }
      
      return null;
    },
  });

  useEffect(() => {
    if (acceptedFiles.length === 0) return;
    
    // Add all accepted files (validator already checked extensions)
    setFiles(prev => [...prev, ...acceptedFiles]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  // Show rejected files
  useEffect(() => {
    if (fileRejections.length > 0) {
      const errorMessages: string[] = [];
      
      fileRejections.forEach(({ file, errors }) => {
        errors.forEach(error => {
          if (error.code === 'file-too-large') {
            errorMessages.push(`"${file.name}" is too large. Maximum file size is 20MB.`);
          } else if (error.code === 'invalid-file-type') {
            errorMessages.push(`"${file.name}" file type is not supported. Supported types: PNG, JPEG, GIF, WebP, SVG, PDF, AI, PSD, EPS`);
          } else {
            errorMessages.push(`Error with "${file.name}": ${error.message}`);
          }
        });
      });
      
      if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));
      }
    }
  }, [fileRejections]);

  const handleRemoveFile = (indexToRemove: number) => {
    setFiles(prev => prev.filter((file, index) => index !== indexToRemove));
  };

  const isImageFile = (file: File) => {
    const fileName = file.name.toLowerCase();
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
    return imageExtensions.some(ext => fileName.endsWith(ext));
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Upload Zone */}
      <div
        {...getRootProps({
          className: `w-full min-h-[12rem] border-2 border-dashed rounded-md border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100 flex flex-col justify-center items-center p-8 cursor-pointer transition-all`,
        })}
      >
        <input {...getInputProps({ 'aria-label': 'Upload artwork files' })} />
        <div className="text-center">
          <svg 
            className="mx-auto h-12 w-12 text-gray-400 mb-4" 
            stroke="currentColor" 
            fill="none" 
            viewBox="0 0 48 48" 
            aria-hidden="true"
          >
            <path 
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
              strokeWidth={2} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold text-gray-700">Drag &apos;n&apos; drop files here</span>, or click to select files
          </p>
          <p className="text-xs text-gray-500">
            Supported: PNG, JPEG, GIF, WebP, SVG, PDF, AI, PSD, EPS
          </p>
          <p className="text-xs text-gray-500">
            (Maximum file size is 20MB per file)
          </p>
        </div>
      </div>

      {/* Preview uploaded files */}
      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {files.map((file, index) => {
            const isImage = isImageFile(file);
            
            return (
              <div key={`${file.name}-${index}`} className="relative group">
                <div className="w-full border-2 border-dashed rounded-md border-gray-300 hover:border-gray-400 bg-gray-50 p-2 transition-all">
                  {/* DELETE BUTTON */}
                  <button 
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleRemoveFile(index);
                    }}
                    className="absolute -right-2 -top-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md transition-all z-20"
                    aria-label="Remove file"
                  >
                    ✕
                  </button>
                  
                  {isImage ? (
                    <div className="flex flex-col gap-1">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        width={200}
                        height={200}
                        className="w-full h-24 sm:h-32 object-cover rounded"
                      />
                      <p className="text-xs text-gray-700 truncate px-1">
                        {file.name}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 items-center justify-center min-h-[6rem] sm:min-h-[8rem]">
                      <DocumentIcon width={40} height={40} />
                      <p className="text-xs text-gray-700 font-medium text-center break-words px-1">
                        {file.name}
                      </p>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 text-center px-1">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RequestAQuoteModalDragDropClickZone;