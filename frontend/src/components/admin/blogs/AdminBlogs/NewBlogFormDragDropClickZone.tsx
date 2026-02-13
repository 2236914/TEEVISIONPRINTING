import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

import Close from '@/utilities/SVGs/Close';

type PropTypes = {
  file: File | string | null;
  setFile: React.Dispatch<React.SetStateAction<File | string | null>>;
  disabled?: boolean;
};

const NewBlogFormDragDropClickZone: React.FC<PropTypes> = ({
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

  const handleRemoveColorImageItem = () => {
    setFile(null);
  };

  useEffect(() => {
    if (acceptedFiles.length === 0) return;

    setFile(acceptedFiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  const imageSrc =
    file instanceof File ? URL.createObjectURL(file) : (file as string);

  if (file) {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`w-fit relative border-2 border-dashed rounded border-[#DDDDDD] hover:border-[#CCCCCC] text-[#BDBDBD] hover:text-[#ADADAD] flex flex-col justify-center items-center p-4`}
        >
          <span className="flex items-center w-fit h-fit justify-center absolute -right-2 -top-2 rounded-full">
            <button onClick={handleRemoveColorImageItem}>
              <Close width={23} height={23} color="#F52F57" />
            </button>
          </span>
          <Image src={imageSrc} alt="Artwork Image" width={500} height={500} />
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

export default NewBlogFormDragDropClickZone;
