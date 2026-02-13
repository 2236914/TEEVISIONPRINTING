import React from 'react';
import type { ColorObject } from 'react-pick-color';
// eslint-disable-next-line import/no-named-as-default
import ColorPicker from 'react-pick-color';

import { useQueryClient } from '@tanstack/react-query';

import NewColorFormDragDropClickZone from '@/components/admin/colors/AdminColors/NewColorFormDragDropClickZone';
import Roboto from '@/utilities/fonts/Roboto';
import type { AddColorType } from '@/utilities/types/AdminFormTypes';

type PropTypes = {
  addColorOnServer: (color: AddColorType) => Promise<void>;
  page: number;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  size: number;
};

const NewColorForm: React.FC<PropTypes> = ({
  addColorOnServer,
  setShowModal,
  page,
  size,
}) => {
  const queryClient = useQueryClient();

  const [colorName, setColorName] = React.useState('');
  const [tagName, setTagName] = React.useState('');
  const [hexCode, setHexCode] = React.useState('#FFFFFF');
  const [isActive, setIsActive] = React.useState(true);
  const [tags, setTags] = React.useState<Array<string>>([]);
  const [isImage, setIsImage] = React.useState(false);
  const [colorImage, setColorImage] = React.useState<File | string | null>(
    null
  );

  const uploadImageToS3 = async () => {
    const formData = new FormData();
    if (colorImage) {
      const directory = `public/album/colors/${generateSlug(colorName)}/${hexCode.replace('#', '')}`;
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const imageUrl = await uploadImageToS3();
    const updateHexCode = isImage ? '' : hexCode;

    await addColorOnServer({
      name: colorName,
      hexCode: updateHexCode,
      isActive,
      tags,
      isImage,
      imageUrl,
    });
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
    <div className={`${Roboto} w-[30rem] text-sm`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center p-4"
      >
        <label className="flex flex-col gap-2">
          <p>Name</p>
          <input
            type="text"
            name="colorName"
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
          Add Color
        </button>
      </form>
    </div>
  );
};

export default NewColorForm;

const generateSlug = (txt: string) => {
  return txt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};
