import { Extension } from '@tiptap/core';

import '@tiptap/extension-text-style';

const FontSize = Extension.create({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle'],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize.replace('px', ''),
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }
              return { style: `font-size: ${attributes.fontSize}px` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (size: any) =>
        ({ chain }: { chain: any }) => {
          return chain().setMark('textStyle', { fontSize: size }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }: { chain: any }) => {
          return chain().setMark('textStyle', { fontSize: null }).run();
        },
    };
  },
});

export default FontSize;
