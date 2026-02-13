import React from 'react';

import type { Editor } from '@tiptap/core';

import Italic from '@/utilities/SVGs/Italic';

type PropTypes = {
  selectedEditor: Editor | null | undefined;
};

const ItalicButton: React.FC<PropTypes> = ({ selectedEditor }) => {
  if (selectedEditor) {
    return (
      <button
        type="button"
        onClick={() => selectedEditor.chain().focus().toggleItalic().run()}
        disabled={!selectedEditor.can().chain().focus().toggleItalic().run()}
        className={selectedEditor.isActive('italic') ? 'is-active' : ''}
      >
        <Italic width={20} height={20} />
      </button>
    );
  }
  return (
    <button disabled>
      <Italic width={20} height={20} color="#d3d3d3" />
    </button>
  );
};

export default ItalicButton;
