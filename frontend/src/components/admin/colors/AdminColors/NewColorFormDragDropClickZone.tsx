import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

import Close from '@/utilities/SVGs/Close';

type PropTypes = {
  file: File | string | null;
  setFile: React.Dispatch<React.SetStateAction<File | string | null>>;
  disabled?: boolean;
};

const NewColorFormDragDropClickZone: React.FC<PropTypes> = ({
  setFile,
  disabled = false,
  file,
}) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    disabled: disabled,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg'],
      'image/webp': ['.webp'],
    },
  });

  useEffect(() => {
    if (acceptedFiles.length === 0) return;
    // Limit file size to 3MB
    if (acceptedFiles[0].size > 3 * 1024 * 1024) {
      alert('File size is too large. Maximum file size is 3MB.');
      return;
    }

    setFile(acceptedFiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  const handleRemoveFile = () => {
    setFile(null);
  };

  const getFileUrl = (file: File | string) => {
    if (typeof file === 'string') {
      return file;
    }
    return URL.createObjectURL(file);
  };

  if (file) {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`relative w-auto h-[20rem] max-h-[20rem] border-2 border-dashed rounded border-[#DDDDDD] hover:border-[#CCCCCC] text-[#BDBDBD] hover:text-[#ADADAD] flex flex-col justify-center items-center p-4 mt-4`}
        >
          <span className="flex items-center w-fit h-fit justify-center absolute -right-3 -top-3 rounded-full">
            <button onClick={handleRemoveFile}>
              <Close width={23} height={23} color="#F52F57" />
            </button>
          </span>
          <Image
            src={getFileUrl(file)}
            alt="Artwork Image"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      {...getRootProps({
        className: `w-full h-[10rem] border-2 border-dashed rounded border-[#DDDDDD] hover:border-[#CCCCCC] text-[#BDBDBD] hover:text-[#ADADAD] flex flex-col justify-center items-center p-4 cursor-pointer`,
      })}
    >
      <input {...getInputProps()} />
      <p className="text-center ">
        Drag &lsquo;n&lsquo; drop some files here, or click to select files
      </p>
    </div>
  );
};

export default NewColorFormDragDropClickZone;
