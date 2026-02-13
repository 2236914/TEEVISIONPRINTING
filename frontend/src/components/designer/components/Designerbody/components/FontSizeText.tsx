import React, { useEffect, useState } from 'react';

interface PropTypes {
  selectedEditor: any;
}

const FontSizeText: React.FC<PropTypes> = ({ selectedEditor }) => {
  const [currentFontSize, setCurrentFontSize] = useState<number>(16);

  useEffect(() => {
    if (selectedEditor) {
      const fontSize =
        selectedEditor.getAttributes('textStyle').fontSize || '16px';
      setCurrentFontSize(fontSize.replace('px', ''));
    }
  }, [selectedEditor]);

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFontSize = event.target.value;
    selectedEditor?.chain().focus().setFontSize(`${newFontSize}px`).run();
    setCurrentFontSize(Number(newFontSize));
  };

  return (
    <label className="flex gap-2">
      <input
        type="number"
        className="form-input"
        onChange={handleFontSizeChange}
        value={currentFontSize}
        disabled={!selectedEditor}
      />
      <p>px</p>
    </label>
  );
};

export default FontSizeText;
