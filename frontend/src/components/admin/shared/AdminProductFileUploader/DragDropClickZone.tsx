import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

type PropTypes = {
  files: File[];
  disabled?: boolean;
  filesOnChange?: (files: File[]) => void;
  setFiles?: React.Dispatch<React.SetStateAction<File[]>>;
};

const DragDropClickZone: React.FC<PropTypes> = ({
  files,
  setFiles,
  disabled = false,
  filesOnChange,
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
    const tempFiles = [...files];
    tempFiles.push(...acceptedFiles);

    if (setFiles) setFiles(tempFiles);
    if (filesOnChange) filesOnChange(tempFiles);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  return (
    <div
      {...getRootProps({
        className: `w-[10rem] h-[10rem] border-2 border-dashed rounded border-[#DDDDDD] text-[#BDBDBD] flex flex-col justify-center items-center p-4
        ${!disabled && 'hover:border-[#7A9F79] hover:text-[#7A9F79] cursor-pointer'}
        `,
      })}
    >
      <input {...getInputProps()} />
      <p className="text-center ">
        Drag &lsquo;n&lsquo; drop some files here, or click to select files
      </p>
    </div>
  );
};

export default DragDropClickZone;
