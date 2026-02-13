import React from 'react';

import type { Editor } from '@tiptap/core';

import Bold from '@/utilities/SVGs/Bold';

type PropTypes = {
  selectedEditor: Editor | null | undefined;
};

const BoldButton: React.FC<PropTypes> = ({ selectedEditor }) => {
  if (selectedEditor) {
    return (
      <button
        type="button"
        onClick={() => selectedEditor.chain().focus().toggleBold().run()}
        disabled={!selectedEditor.can().chain().focus().toggleBold().run()}
        className={selectedEditor.isActive('bold') ? 'is-active' : ''}
      >
        <Bold width={20} height={20} />
      </button>
    );
  }
  return (
    <button disabled>
      <Bold width={20} height={20} color="#d3d3d3" />
    </button>
  );
};

export default BoldButton;
