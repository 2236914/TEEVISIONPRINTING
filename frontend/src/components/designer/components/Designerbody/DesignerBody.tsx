/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default */
'use client';
import React, { useEffect, useState } from 'react';

import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';
import { Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { extractColors } from 'extract-colors';
import type { FinalColor } from 'extract-colors/lib/types/Color';
import FontSize from 'tiptap-extension-font-size';
import { v4 as uuidv4 } from 'uuid';

import BoldButton from '@/components/designer/components/Designerbody/components/BoldButton';
import DesginerBodyImageSection from '@/components/designer/components/Designerbody/components/DesginerBodyImageSection';
import DesignerBodyColorPickerSection from '@/components/designer/components/Designerbody/components/DesignerBodyColorPickerSection';
import FontFamilySelect from '@/components/designer/components/Designerbody/components/FontFamilySelect';
import FontSizeSelect from '@/components/designer/components/Designerbody/components/FontSizeSelect';
import ItalicButton from '@/components/designer/components/Designerbody/ItalicButton';
import type { Product } from '@/utilities/types/shared.types';

type PropTypes = {
  products: Array<Product>;
};

export type ArtworkType = {
  data: string;
  detectedColors: Array<string>;
  height: string | number;
  id: string;
  width: string | number;
  x: number;
  y: number;
};

export type TextboxType = {
  content: string;
  editor: Editor | null;
  height: string | number;
  id: string;
  width: string | number;
  x: number;
  y: number;
};

export type ArtworkListType = {
  [productName: string]: {
    [color: string]: {
      [imageIdx: number]: Array<ArtworkType>;
    };
  };
};

export type TextboxListType = {
  [productName: string]: {
    [color: string]: {
      [imageIdx: number]: Array<TextboxType>;
    };
  };
};

export type DragNDropType = 'artwork' | 'textbox';

const DesignerBody: React.FC<PropTypes> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [artworks, setArtworks] = useState<ArtworkListType>({
    [selectedProduct.name]: {
      [selectedProduct.colors[0].hexCode]: {
        0: [],
      },
    },
  });
  const [textboxes, setTextboxes] = useState<TextboxListType>({
    [selectedProduct.name]: {
      [selectedProduct.colors[0].hexCode]: {
        0: [],
      },
    },
  });
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isAspectRatioLocked, setIsAspectRatioLocked] = useState(true);
  const [selectedArtworkId, setSelectedArtworkId] = useState<string | null>(
    null
  );
  const [currentColor, setCurrentColor] = useState(products[0].colors[0]);
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    const emptyArtworks: ArtworkListType = {};
    const colorsForAllProducts = products.flatMap((product) => product.colors);

    products.forEach((product) => {
      emptyArtworks[product.name] = {};
      colorsForAllProducts.forEach((color) => {
        emptyArtworks[product.name][color.hexCode] = {};
        color.productColorImages.forEach((__, idx) => {
          emptyArtworks[product.name][color.hexCode][idx] = [];
        });
      });
    });
    setArtworks(emptyArtworks);
  }, [products]);

  useEffect(() => {
    const emptyTextboxes: TextboxListType = {};
    const colorsForAllProducts = products.flatMap((product) => product.colors);

    products.forEach((product) => {
      emptyTextboxes[product.name] = {};
      colorsForAllProducts.forEach((color) => {
        emptyTextboxes[product.name][color.hexCode] = {};
        color.productColorImages.forEach((__, idx) => {
          emptyTextboxes[product.name][color.hexCode][idx] = [];
        });
      });
    });
    setTextboxes(emptyTextboxes);
  }, [products]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const convertedFilesToLink = Array.from(files || []).map((file) => {
      const fileURL = URL.createObjectURL(file);
      const image = new Image();
      image.src = fileURL;

      return new Promise<ArtworkType>((resolve) => {
        image.onload = () => {
          const aspectRatio = image.width / image.height;
          const maxWidth = 100;
          const width = Math.min(image.width, maxWidth);
          const height = width / aspectRatio;

          extractColors(fileURL)
            .then((colors: FinalColor[]) => {
              resolve({
                id: uuidv4(),
                data: fileURL,
                height: height,
                width: width,
                x: 200,
                y: 200,
                detectedColors: colors.map((color) => color.hex),
              });
            })
            .catch(console.error);
        };
      });
    });

    void Promise.all(convertedFilesToLink).then((newArtworks) => {
      const updatedArtworks = {
        ...artworks,
        [selectedProduct.name]: {
          ...artworks[selectedProduct.name],
          [currentColor.hexCode]: {
            ...artworks[selectedProduct.name][currentColor.hexCode],
            [imageIdx]: [
              ...newArtworks,
              ...artworks[selectedProduct.name][currentColor.hexCode][imageIdx],
            ],
          },
        },
      };
      setArtworks(updatedArtworks);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleArtworkButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleTextboxButtonClick = () => {
    // setTextboxes([
    //   ...textboxes,
    //   {
    //     content: '',
    //     height: '30px',
    //     id: uuidv4(),
    //     width: '120px',
    //     x: 0,
    //     y: 0,
    //     editor: new Editor({
    //       extensions: [StarterKit, FontSize, TextStyle, FontFamily],
    //       content: '<p>Input text here</p>',
    //     }),
    //   },
    // ]);
    const newTextboxes = {
      ...textboxes,
      [selectedProduct.name]: {
        ...textboxes[selectedProduct.name],
        [currentColor.hexCode]: {
          ...textboxes[selectedProduct.name][currentColor.hexCode],
          [imageIdx]: [
            ...textboxes[selectedProduct.name][currentColor.hexCode][imageIdx],
            {
              content: '',
              height: '30px',
              id: uuidv4(),
              width: '120px',
              x: 0,
              y: 0,
              editor: new Editor({
                extensions: [StarterKit, FontSize, TextStyle, FontFamily],
                content: '<p>Input text here</p>',
              }),
            },
          ],
        },
      },
    };
    setTextboxes(newTextboxes);
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProductId = event.target.value;
    const foundProduct = products.find(
      (product) => String(product.id) === selectedProductId
    );

    setSelectedProduct(foundProduct || products[0]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedArtworkId !== null) {
        const clickedElement = event.target as HTMLElement;
        const parentElement = document.getElementById('editor-section');
        const rndElement = document.getElementById(`item-${selectedArtworkId}`);
        if (
          parentElement &&
          rndElement &&
          parentElement.contains(clickedElement) &&
          !rndElement.contains(clickedElement)
        ) {
          setSelectedArtworkId(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedArtworkId]);

  useEffect(() => {
    setCurrentColor(selectedProduct.colors[0]);
  }, [selectedProduct]);

  const selectedEditor = textboxes[selectedProduct.name][currentColor.hexCode][
    imageIdx
  ].find((textbox) => selectedArtworkId === textbox.id)?.editor;

  const detectedColorsOfSpecificProduct = artworks[selectedProduct.name][
    currentColor.hexCode
  ][imageIdx].flatMap((artwork) => artwork.detectedColors);

  return (
    <div className="flex w-full max-w-[85rem] p-8">
      <div id="editor-section" className="w-full relative">
        <DesginerBodyImageSection
          artworks={artworks}
          setArtworks={setArtworks}
          currentColor={currentColor}
          isAspectRatioLocked={isAspectRatioLocked}
          setIsAspectRatioLocked={setIsAspectRatioLocked}
          textboxes={textboxes}
          setTextboxes={setTextboxes}
          selectedArtworkId={selectedArtworkId}
          setSelectedArtworkId={setSelectedArtworkId}
          imageIdx={imageIdx}
          setImageIdx={setImageIdx}
          selectedProduct={selectedProduct}
        />
      </div>
      <div className="max-w-[35rem] flex h-fit flex-col gap-4 w-full bg-background4 p-4">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleProductChange}
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <DesignerBodyColorPickerSection
          colors={selectedProduct.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onInput={handleFileChange}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleArtworkButtonClick}
        >
          Upload Artwork
        </button>
        {detectedColorsOfSpecificProduct.length > 0 && (
          <>
            <p>{`Number of Colors: ${detectedColorsOfSpecificProduct.length}`}</p>
            <div className="flex gap-2">
              <p>Detected Colors: </p>
              {
                <div className="flex gap-2">
                  {detectedColorsOfSpecificProduct.map((color) => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              }
            </div>
          </>
        )}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleTextboxButtonClick}
        >
          Add Textbox
        </button>
        <div className="flex gap-2">
          <BoldButton selectedEditor={selectedEditor} />
          <ItalicButton selectedEditor={selectedEditor} />
        </div>
        <FontSizeSelect selectedEditor={selectedEditor} />
        <FontFamilySelect selectedEditor={selectedEditor} />
      </div>
    </div>
  );
};

export default DesignerBody;
