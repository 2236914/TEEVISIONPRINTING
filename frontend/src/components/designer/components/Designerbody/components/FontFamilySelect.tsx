import React, { useEffect, useState } from 'react';

const fontFamilies = [
  'Helvetica',
  'Arial',
  'Arial Black',
  'Verdana',
  'Tahoma',
  'Trebuchet MS',
  'Impact',
  'Gill Sans',
  'Times New Roman',
  'Georgia',
  'Palatino',
  'Baskerville',
  'Andalé Mono',
  'Courier',
  'Lucida',
  'Monaco',
  'Bradley Hand',
  'Brush Script MT',
  'Luminari',
  'Comic Sans MS',
].sort();

interface PropTypes {
  selectedEditor: any;
}

const FontFamilySelect: React.FC<PropTypes> = ({ selectedEditor }) => {
  const [currentFontFamily, setCurrentFontFamily] = useState<string>('Arial');
  useEffect(() => {
    if (selectedEditor) {
      const fontFamily =
        selectedEditor.getAttributes('textStyle').fontFamily || 'Arial';
      setCurrentFontFamily(fontFamily);
    }
  }, [selectedEditor]);

  const handleFontFamilyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newFontFamily = event.target.value;
    selectedEditor?.chain().focus().setFontFamily(newFontFamily).run();
    setCurrentFontFamily(newFontFamily);
  };

  return (
    <select
      className="form-select"
      onChange={handleFontFamilyChange}
      value={currentFontFamily}
      disabled={!selectedEditor}
    >
      {fontFamilies.map((fontFamily) => (
        <option key={fontFamily} value={fontFamily}>
          {fontFamily}
        </option>
      ))}
    </select>
  );
};

export default FontFamilySelect;
