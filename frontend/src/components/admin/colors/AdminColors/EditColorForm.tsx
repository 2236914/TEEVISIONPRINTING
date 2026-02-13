import React from 'react';
import type { ColorObject } from 'react-pick-color';
// eslint-disable-next-line import/no-named-as-default
import ColorPicker from 'react-pick-color';

import { useQueryClient } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';

import NewColorFormDragDropClickZone from '@/components/admin/colors/AdminColors/NewColorFormDragDropClickZone';
import type { AddColorType } from '@/utilities/types/AdminFormTypes';
import type { Color } from '@/utilities/types/shared.types';

type PropTypes = {
  color: Color;
  editColorOnServer: (color: AddColorType, colorId: string) => Promise<void>;
  page: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  size: number;
};

const EditColorForm: React.FC<PropTypes> = ({
  editColorOnServer,
  color,
  setShowModal,
  page,
  size,
}) => {
  const queryClient = useQueryClient();

  const [colorName, setColorName] = React.useState(color.name);
  const [tagName, setTagName] = React.useState('');
  const [hexCode, setHexCode] = React.useState(color.hexCode);
  const [isActive, setIsActive] = React.useState(color.isActive);
  const [tags, setTags] = React.useState<Array<string>>(color.tags);
  const [isImage, setIsImage] = React.useState(color.isImage);
  const [colorImage, setColorImage] = React.useState<File | string | null>(
    color.imageUrl
  );

  const uploadImageToS3 = async () => {
    const formData = new FormData();
    if (colorImage) {
      let directory = `public/album/colors/${colorName}/${hexCode.replace('#', '')}`;
      if (isImage) {
        directory = `public/album/colors/${colorName}/${uuidv4()}`;
      }

      formData.append('file', colorImage);
      formData.append('directory', directory);
      const response = await fetch('/api/s3-upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Error uploading images from color ${directory} to S3`);
      }
      const responseJson = await response.json();
      return responseJson.body;
    }

    return '';
  };

  const deleteImageFromS3 = async (path: string) => {
    try {
      const formData = new FormData();
      formData.append('path', path);
      await fetch('/api/s3-delete', {
        method: 'DELETE',
        body: formData,
      });
      return;
    } catch (error) {
      console.error('Error deleting image from S3:', error);
      return;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let imageUrl = color.imageUrl;

    if (colorImage instanceof File) {
      await deleteImageFromS3(color.imageUrl);
      imageUrl = await uploadImageToS3();
    }

    const updateHexCode = isImage ? '' : hexCode;

    await editColorOnServer(
      {
        name: colorName,
        hexCode: updateHexCode,
        isActive,
        tags,
        isImage,
        imageUrl,
      },
      String(color.id)
    );
    setShowModal(false);

    await queryClient.invalidateQueries({
      queryKey: ['colors', 'paginated', page, size],
    });
  };

  const handleNameTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setColorName(event.target.value);
  };

  const handleTagNameTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTagName(event.target.value);
  };

  const handleHexCodeChange = (color: ColorObject) => {
    setHexCode(color.hex);
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(event.target.checked);
  };

  const handleAddTag = () => {
    setTags([...tags, tagName]);
    setTagName('');
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((currentTag) => currentTag !== tag));
  };

  return (
    <div className="w-[30rem]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center p-4"
      >
        <label className="flex flex-col gap-2">
          <p>Name</p>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Color name"
            value={colorName}
            onChange={handleNameTextInputChange}
          />
        </label>
        <div className="flex flex-col gap-2">
          <p>Tags</p>
          <div className="flex gap-2">
            <input
              type="text"
              name="tagName"
              className="input input-bordered w-full"
              placeholder="Tag name"
              value={tagName}
              onChange={handleTagNameTextInputChange}
            />
            <button type="button" onClick={handleAddTag} className="btn">
              Add
            </button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, idx) => (
              <span
                className="badge py-4 pr-4 bg-priceMarkupIndicationBackground"
                key={idx}
              >
                <button
                  className="w-[1.2rem] h-[1.2rem] mr-2 rounded-full text-[0.6rem] text-white font-bold bg-closeButtonColor"
                  onClick={() => handleRemoveTag(tag)}
                >
                  X
                </button>
                <p>{tag}</p>
              </span>
            ))}
          </div>
        </div>
        <label className="flex gap-4">
          <p>Is image?</p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isImage}
            onChange={() => setIsImage(!isImage)}
          />
        </label>
        {isImage ? (
          <NewColorFormDragDropClickZone
            file={colorImage}
            setFile={setColorImage}
          />
        ) : (
          <label className="flex items-center flex-col gap-2">
            <p>Hex Code</p>
            <ColorPicker color={hexCode} onChange={handleHexCodeChange} />
          </label>
        )}
        <label className="flex gap-4">
          <p>Is status active?</p>
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={isActive}
            onChange={handleToggleChange}
          />
        </label>
        <button type="submit" className="btn">
          Edit Color
        </button>
      </form>
    </div>
  );
};

export default EditColorForm;
