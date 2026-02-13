import React, { useEffect } from 'react';

import type { Editor } from '@tiptap/react';

type PropTypes = {
  editor: Editor;
  headingLevel: string;
  setHeadingLevel: React.Dispatch<React.SetStateAction<string>>;
};

const HeaderSelect: React.FC<PropTypes> = ({
  editor,
  headingLevel,
  setHeadingLevel,
}) => {
  const isParagraphActive = editor.isActive('paragraph');
  const isH1Active = editor.isActive('heading', { level: 1 });
  const isH2Active = editor.isActive('heading', { level: 2 });
  const isH3Active = editor.isActive('heading', { level: 3 });
  const isH4Active = editor.isActive('heading', { level: 4 });
  const isH5Active = editor.isActive('heading', { level: 5 });
  useEffect(() => {
    if (isParagraphActive) {
      setHeadingLevel('paragraph');
    }
    if (isH1Active) {
      setHeadingLevel('h1');
    }
    if (isH2Active) {
      setHeadingLevel('h2');
    }
    if (isH3Active) {
      setHeadingLevel('h3');
    }
    if (isH4Active) {
      setHeadingLevel('h4');
    }
    if (isH5Active) {
      setHeadingLevel('h5');
    }
  }, [
    editor,
    isParagraphActive,
    isH1Active,
    isH2Active,
    isH3Active,
    isH4Active,
    isH5Active,
    setHeadingLevel,
  ]);

  const handleHeadingLevelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    if (value === 'paragraph') {
      editor.chain().focus().setParagraph().run();
    }
    if (value === 'h1') {
      editor.chain().focus().toggleHeading({ level: 1 }).run();
    }
    if (value === 'h2') {
      editor.chain().focus().toggleHeading({ level: 2 }).run();
    }
    if (value === 'h3') {
      editor.chain().focus().toggleHeading({ level: 3 }).run();
    }
    if (value === 'h4') {
      editor.chain().focus().toggleHeading({ level: 4 }).run();
    }
    if (value === 'h5') {
      editor.chain().focus().toggleHeading({ level: 5 }).run();
    }

    setHeadingLevel(value);
  };
  return (
    <select
      value={headingLevel}
      onChange={handleHeadingLevelChange}
      className="select"
    >
      <option value="paragraph">Paragraph</option>
      <option value="h1">Heading 1</option>
      <option value="h2">Heading 2</option>
      <option value="h3">Heading 3</option>
      <option value="h4">Heading 4</option>
      <option value="h5">Heading 5</option>
    </select>
  );
};

export default HeaderSelect;
