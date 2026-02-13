/* eslint-disable no-restricted-imports */
/* eslint-disable import/no-named-as-default */
import React from 'react';

import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import './TextEditor.css';
import './CustomEditorContainer.css';

import AddImageModal from '@/components/admin/blogs/AdminBlogs/TextEditor/components/AddImageModal/AddImageModal';
import HeaderSelect from '@/components/admin/blogs/AdminBlogs/TextEditor/components/HeaderSelect';
import InsertLinkButton from '@/components/admin/blogs/AdminBlogs/TextEditor/components/InsertLinkButton';
import TextAlignmentDropdown from '@/components/admin/blogs/AdminBlogs/TextEditor/components/TextAlignmentDropdown';
import Roboto from '@/utilities/fonts/Roboto';
import BlockQuote from '@/utilities/SVGs/BlockQuote';
import Bold from '@/utilities/SVGs/Bold';
import BulletList from '@/utilities/SVGs/BulletList';
import Code from '@/utilities/SVGs/Code';
import CodeBlock from '@/utilities/SVGs/CodeBlock';
import HardBreak from '@/utilities/SVGs/HardBreak';
import HorizontalRule from '@/utilities/SVGs/HorizontalRule';
import Italic from '@/utilities/SVGs/Italic';
import OrderedList from '@/utilities/SVGs/OrderedList';
import Redo from '@/utilities/SVGs/Redo';
import Strike from '@/utilities/SVGs/Strike';
import Undo from '@/utilities/SVGs/Undo';
import type { AddImageAsset } from '@/utilities/types/AdminFormTypes';
import type { ImageAsset } from '@/utilities/types/shared.types';

type MenuBarPropTypes = {
  addImageAssetOnServer: (imageAsset: AddImageAsset) => Promise<void>;
  assetImages: Array<ImageAsset>;
  deleteImageAssetsOnServer: (imageAssetIds: number[]) => Promise<void>;
};

const MenuBar: React.FC<MenuBarPropTypes> = ({
  assetImages,
  addImageAssetOnServer,
  deleteImageAssetsOnServer,
}) => {
  const { editor } = useCurrentEditor();

  const [headingLevel, setHeadingLevel] = React.useState('paragraph');
  const [textAlignment, setTextAlignment] = React.useState('left');

  const onImportImageButtonClicked = async (imageUrl: string) => {
    if (editor) {
      const alt = window.prompt(
        'Enter alt text for this image (optional):',
        ''
      );
      editor
        .chain()
        .focus()
        .setImage({ src: imageUrl, alt: alt || '' })
        .run();
    }
  };

  const onEditImageAlt = () => {
    if (!editor) return;
    const { state } = editor;
    const { selection } = state;
    let node: any = null;

    state.doc.nodesBetween(selection.from, selection.to, (no) => {
      if (no.type.name === 'image') {
        node = no;
      }
    });

    if (node) {
      const currentAlt = node.attrs.alt || '';
      const newAlt = window.prompt('Edit image alt text:', currentAlt);
      if (newAlt !== null) {
        editor
          .chain()
          .focus()
          .setImage({ ...node.attrs, alt: newAlt })
          .run();
      }
    } else {
      window.alert('Please select an image to edit its alt text.');
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className={`tiptap ${Roboto} fixed bottom-0 left-80 right-16`}>
      <div className="control-group">
        <div className="w-full button-group flex items-center justify-center">
          <div className="bg-background4 rounded-lg p-4 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBold().run()}
              disabled={!editor.can().chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
            >
              <Bold width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
            >
              <Italic width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              disabled={!editor.can().chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
            >
              <Strike width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCode().run()}
              disabled={!editor.can().chain().focus().toggleCode().run()}
              className={editor.isActive('code') ? 'is-active' : ''}
            >
              <Code width={20} height={20} />
            </button>
            <HeaderSelect
              editor={editor}
              headingLevel={headingLevel}
              setHeadingLevel={setHeadingLevel}
            />
            <TextAlignmentDropdown
              editor={editor}
              textAlignment={textAlignment}
              setTextAlignment={setTextAlignment}
            />
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
              <BulletList width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
              <OrderedList width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
              <CodeBlock width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
              <BlockQuote width={20} height={20} />
            </button>
            <InsertLinkButton editor={editor} />
            <button
              type="button"
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
            >
              <HorizontalRule width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setHardBreak().run()}
            >
              <HardBreak width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().undo().run()}
              disabled={!editor.can().chain().focus().undo().run()}
            >
              <Undo width={20} height={20} />
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().redo().run()}
              disabled={!editor.can().chain().focus().redo().run()}
            >
              <Redo width={20} height={20} />
            </button>
            <AddImageModal
              assetImages={assetImages}
              addImageAssetOnServer={addImageAssetOnServer}
              deleteImageAssetsOnServer={deleteImageAssetsOnServer}
              onImportImageButtonClicked={onImportImageButtonClicked}
            />
            <button
              type="button"
              onClick={onEditImageAlt}
              title="Edit selected image alt text"
            >
              Edit Image Alt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const extensions = [
  TextStyle,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  Image,
  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),
  Link.configure({
    openOnClick: true,
    autolink: true,
    defaultProtocol: 'https',
    protocols: ['http', 'https'],
  }),
];

type PropTypes = {
  addImageAssetOnServer: (imageAsset: AddImageAsset) => Promise<void>;
  assetImages: Array<ImageAsset>;
  content: string;
  deleteImageAssetsOnServer: (imageAssetIds: number[]) => Promise<void>;
  handleContentChange: (value: string) => void;
};

const TextEditor: React.FC<PropTypes> = ({
  content,
  handleContentChange,
  assetImages,
  addImageAssetOnServer,
  deleteImageAssetsOnServer,
}) => {
  return (
    <div>
      <EditorProvider
        slotBefore={
          <MenuBar
            assetImages={assetImages}
            addImageAssetOnServer={addImageAssetOnServer}
            deleteImageAssetsOnServer={deleteImageAssetsOnServer}
          />
        }
        extensions={extensions}
        content={content}
        immediatelyRender={false}
        onUpdate={(content) => {
          handleContentChange(content.editor.getHTML());
        }}
        editorContainerProps={{ className: 'custom-editor-container' }}
      />
    </div>
  );
};

export default TextEditor;
