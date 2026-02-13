import React, { useEffect } from 'react';

import type { Editor } from '@tiptap/react';

import CenterAlignment from '@/utilities/SVGs/CenterAlignment';
import JustifyAlignment from '@/utilities/SVGs/JustifyAlignment';
import LeftAlignment from '@/utilities/SVGs/LeftAlignment';
import RightAlignment from '@/utilities/SVGs/RightAlignment';

type PropTypes = {
  editor: Editor;
  setTextAlignment: React.Dispatch<React.SetStateAction<string>>;
  textAlignment: string;
};

const TextAlignmentDropdown: React.FC<PropTypes> = ({
  editor,
  setTextAlignment,
  textAlignment,
}) => {
  const isLeftAlignmentActive = editor.isActive({ textAlign: 'left' });
  const isCenterAlignmentActive = editor.isActive({ textAlign: 'center' });
  const isJustifyAlignmentActive = editor.isActive({ textAlign: 'justify' });
  const isRightAlignmentActive = editor.isActive({ textAlign: 'right' });

  useEffect(() => {
    if (isLeftAlignmentActive) {
      setTextAlignment('left');
    }
    if (isCenterAlignmentActive) {
      setTextAlignment('center');
    }
    if (isJustifyAlignmentActive) {
      setTextAlignment('justify');
    }
    if (isRightAlignmentActive) {
      setTextAlignment('right');
    }
  }, [
    editor,
    isLeftAlignmentActive,
    isCenterAlignmentActive,
    isJustifyAlignmentActive,
    isRightAlignmentActive,
    setTextAlignment,
  ]);

  const handleTextAlignmentChange = (textAlign: string) => {
    if (textAlign === 'left') {
      editor.chain().focus().setTextAlign('left').run();
    }
    if (textAlign === 'center') {
      editor.chain().focus().setTextAlign('center').run();
    }
    if (textAlign === 'justify') {
      editor.chain().focus().setTextAlign('justify').run();
    }
    if (textAlign === 'right') {
      editor.chain().focus().setTextAlign('right').run();
    }
  };

  return (
    <div className="dropdown dropdown-hover dropdown-top dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 bg-white">
        {textAlignment === 'left' ? (
          <LeftAlignment />
        ) : textAlignment === 'center' ? (
          <CenterAlignment />
        ) : textAlignment === 'justify' ? (
          <JustifyAlignment />
        ) : textAlignment === 'right' ? (
          <RightAlignment />
        ) : (
          <LeftAlignment />
        )}
      </div>
      <div className="dropdown-content menu rounded z-[1] w-12 p-2 flex gap-4 items-center bg-background5">
        <button onClick={() => handleTextAlignmentChange('left')} type="button">
          <LeftAlignment />
        </button>
        <button
          onClick={() => handleTextAlignmentChange('center')}
          type="button"
        >
          <CenterAlignment />
        </button>
        <button
          onClick={() => handleTextAlignmentChange('justify')}
          type="button"
        >
          <JustifyAlignment />
        </button>
        <button
          onClick={() => handleTextAlignmentChange('right')}
          type="button"
        >
          <RightAlignment />
        </button>
      </div>
    </div>
  );
};

export default TextAlignmentDropdown;
