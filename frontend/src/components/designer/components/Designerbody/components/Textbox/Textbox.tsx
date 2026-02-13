import React from 'react';

import { type Editor, EditorContent } from '@tiptap/react';

// eslint-disable-next-line no-restricted-imports
import './Textbox.css';

type PropTypes = {
  editor: Editor | null;
};

const Textbox: React.FC<PropTypes> = ({ editor }) => {
  return (
    <div className="absolute top-0 left-0 w-fit z-50">
      <EditorContent
        editor={editor}
        className="custom-textbox"
        style={{ outline: 0, border: 0 }}
      />
    </div>
  );
};

export default Textbox;
