import React, { useEffect, useState } from 'react';

import type { Editor } from '@tiptap/core';

type PropTypes = {
  selectedEditor: Editor | null | undefined;
};

const fontSizes = [
  '2px',
  '4px',
  '6px',
  '8px',
  '10px',
  '12px',
  '14px',
  '16px',
  '18px',
  '20px',
  '24px',
  '28px',
  '32px',
  '36px',
  '40px',
  '48px',
  '56px',
  '64px',
  '72px',
  '80px',
  '96px',
  '112px',
  '128px',
  '144px',
  '160px',
  '176px',
];

const FontSizeSelect: React.FC<PropTypes> = ({ selectedEditor }) => {
  const [currentFontSize, setCurrentFontSize] = useState<string>('16px');

  useEffect(() => {
    if (selectedEditor) {
      const fontSize =
        selectedEditor.getAttributes('textStyle').fontSize || '16px';
      setCurrentFontSize(fontSize);
    }
  }, [selectedEditor]);

  const handleFontSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    selectedEditor?.chain().focus().setFontSize(event.target.value).run();
    setCurrentFontSize(event.target.value);
  };
  return (
    <select
      className="form-select"
      onChange={handleFontSizeChange}
      value={currentFontSize}
      disabled={!selectedEditor}
    >
      {fontSizes.map((fontSize) => (
        <option key={fontSize} value={fontSize}>
          {fontSize}
        </option>
      ))}
    </select>
  );
};

export default FontSizeSelect;
