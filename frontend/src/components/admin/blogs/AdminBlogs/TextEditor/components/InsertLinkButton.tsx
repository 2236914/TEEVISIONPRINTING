import React, { useState } from 'react';

import { type Editor } from '@tiptap/react';

import LinkIcon from '@/utilities/SVGs/LinkIcon';

type PropTypes = {
  editor: Editor | null;
};

const InsertLinkButton: React.FC<PropTypes> = ({ editor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [link, setLink] = useState('');
  const [text, setText] = useState('');

  const handleInsertLink = () => {
    if (editor && link && text) {
      editor.commands.insertContent(
        `<a href="${link}" target="_blank" rel="noopener noreferrer">${text}</a>`
      );
      setIsModalOpen(false);
      setLink('');
      setText('');
    }
  };

  return (
    <>
      {/* Button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn btn-sm"
        type="button"
      >
        <LinkIcon width={20} height={20} />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Insert Link</h3>
            <div className="py-4">
              <label className="block mb-2">
                Link URL:
                <input
                  type="url"
                  value={link}
                  onChange={(event) => setLink(event.target.value)}
                  placeholder="https://example.com"
                  className="input input-bordered w-full mt-1"
                />
              </label>
              <label className="block mb-2">
                Link Text:
                <input
                  type="text"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                  placeholder="Example Text"
                  className="input input-bordered w-full mt-1"
                />
              </label>
            </div>
            <div className="modal-action">
              <button
                onClick={() => setIsModalOpen(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button
                onClick={handleInsertLink}
                className="btn btn-primary"
                disabled={!link || !text}
              >
                Insert Link
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InsertLinkButton;
