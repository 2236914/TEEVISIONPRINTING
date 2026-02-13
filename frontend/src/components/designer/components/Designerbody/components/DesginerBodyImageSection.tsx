import React, { useEffect } from 'react';
import Image from 'next/image';

import DesignerItemContainer from '@/components/designer/components/Designerbody/components/DesignerItemContainer/DesignerItemContainer';
import Textbox from '@/components/designer/components/Designerbody/components/Textbox/Textbox';
import type {
  ArtworkListType,
  DragNDropType,
  TextboxListType,
} from '@/components/designer/components/Designerbody/DesignerBody';
import type { Color, Product } from '@/utilities/types/shared.types';

type PropTypes = {
  artworks: ArtworkListType;
  currentColor: Color;
  imageIdx: number;
  isAspectRatioLocked: boolean;
  selectedArtworkId: string | null;
  selectedProduct: Product;
  setArtworks: React.Dispatch<React.SetStateAction<ArtworkListType>>;
  setImageIdx: React.Dispatch<React.SetStateAction<number>>;
  setIsAspectRatioLocked: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedArtworkId: React.Dispatch<React.SetStateAction<string | null>>;
  setTextboxes: React.Dispatch<React.SetStateAction<TextboxListType>>;
  textboxes: TextboxListType;
};

const DesginerBodyImageSection: React.FC<PropTypes> = ({
  currentColor,
  setIsAspectRatioLocked,
  artworks,
  setArtworks,
  setTextboxes,
  textboxes,
  setSelectedArtworkId,
  selectedArtworkId,
  isAspectRatioLocked,
  imageIdx,
  setImageIdx,
  selectedProduct,
}) => {
  const productImages = currentColor.productColorImages.map(
    (image) => image.imageUrl
  );

  const onImageClicked = (idx: number) => {
    setImageIdx(idx);
  };

  const shownImageSrc = productImages[imageIdx];

  const onResize = (
    dir: any,
    ref: any,
    id: string,
    position: { x: number; y: number },
    dragNDropType: DragNDropType
  ) => {
    if (
      dir.includes('topLeft') ||
      dir.includes('topRight') ||
      dir.includes('bottomLeft') ||
      dir.includes('bottomRight')
    ) {
      setIsAspectRatioLocked(true);
    } else {
      setIsAspectRatioLocked(false);
    }

    if (dragNDropType === 'artwork') {
      const newArtworks = {
        ...artworks,
        [selectedProduct.name]: {
          ...artworks[selectedProduct.name],
          [currentColor.hexCode]: {
            ...artworks[selectedProduct.name][currentColor.hexCode],
            [imageIdx]: artworks[selectedProduct.name][currentColor.hexCode][
              imageIdx
            ].map((artwork) => {
              if (artwork.id === id) {
                return {
                  ...artwork,
                  width: ref.style.width,
                  height: ref.style.height,
                  x: position.x,
                  y: position.y,
                };
              }
              return artwork;
            }),
          },
        },
      };

      setArtworks(newArtworks);
    } else {
      const newTextboxes = {
        ...textboxes,
        [selectedProduct.name]: {
          ...textboxes[selectedProduct.name],
          [currentColor.hexCode]: {
            ...textboxes[selectedProduct.name][currentColor.hexCode],
            [imageIdx]: textboxes[selectedProduct.name][currentColor.hexCode][
              imageIdx
            ].map((textbox) => {
              if (textbox.id === id) {
                return {
                  ...textbox,
                  width: ref.style.width,
                  height: ref.style.height,
                  x: position.x,
                  y: position.y,
                };
              }
              return textbox;
            }),
          },
        },
      };
      setTextboxes(newTextboxes);
    }
  };

  const onDragStop = (
    event: any,
    data: any,
    id: string,
    dragNDropType: DragNDropType
  ) => {
    if (dragNDropType === 'artwork') {
      const newArtworks = {
        ...artworks,
        [selectedProduct.name]: {
          ...artworks[selectedProduct.name],
          [currentColor.hexCode]: {
            ...artworks[selectedProduct.name][currentColor.hexCode],
            [imageIdx]: artworks[selectedProduct.name][currentColor.hexCode][
              imageIdx
            ].map((artwork) => {
              if (artwork.id === id) {
                return {
                  ...artwork,
                  x: data.x,
                  y: data.y,
                };
              }
              return artwork;
            }),
          },
        },
      };
      setArtworks(newArtworks);
    } else {
      const newTextboxes = {
        ...textboxes,
        [selectedProduct.name]: {
          ...textboxes[selectedProduct.name],
          [currentColor.hexCode]: {
            ...textboxes[selectedProduct.name][currentColor.hexCode],
            [imageIdx]: textboxes[selectedProduct.name][currentColor.hexCode][
              imageIdx
            ].map((textbox) => {
              if (textbox.id === id) {
                return {
                  ...textbox,
                  x: data.x,
                  y: data.y,
                };
              }
              return textbox;
            }),
          },
        },
      };
      setTextboxes(newTextboxes);
    }
  };

  const handleDeleteArtwork = (id: string) => {
    const newArtworks = {
      ...artworks,
      [selectedProduct.name]: {
        ...artworks[selectedProduct.name],
        [currentColor.hexCode]: {
          ...artworks[selectedProduct.name][currentColor.hexCode],
          [imageIdx]: artworks[selectedProduct.name][currentColor.hexCode][
            imageIdx
          ].filter((artwork) => artwork.id !== id),
        },
      },
    };
    setArtworks(newArtworks);
  };

  const handleDeleteTextbox = (id: string) => {
    const newTextboxes = {
      ...textboxes,
      [selectedProduct.name]: {
        ...textboxes[selectedProduct.name],
        [currentColor.hexCode]: {
          ...textboxes[selectedProduct.name][currentColor.hexCode],
          [imageIdx]: textboxes[selectedProduct.name][currentColor.hexCode][
            imageIdx
          ].filter((textbox) => textbox.id !== id),
        },
      },
    };
    setTextboxes(newTextboxes);
  };

  const handleArtworkClick = (id: string) => {
    setSelectedArtworkId(id);
  };

  const handleTextboxClick = (id: string) => {
    setSelectedArtworkId(id);
  };

  useEffect(() => {
    setImageIdx(0);
  }, [currentColor, setImageIdx]);

  const currentArtworks =
    artworks[selectedProduct.name][currentColor.hexCode][imageIdx];
  const currentTextboxes =
    textboxes[selectedProduct.name][currentColor.hexCode][imageIdx];

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 w-[4rem]">
        {productImages.map((image, idx) => (
          <button
            key={image + idx}
            className={`${imageIdx === idx && 'border-2'} p-[0.2rem] border-primaryMinimalist rounded-md`}
            onClick={() => onImageClicked(idx)}
          >
            <Image
              src={image || ''}
              width={130}
              height={130}
              alt="product image"
              className="h-full w-full"
            />
          </button>
        ))}
      </div>
      <div className="relative w-auto h-[30rem]">
        <Image
          src={shownImageSrc}
          alt="product image"
          width={500}
          height={500}
          draggable={false}
        />
        <div className="w-full h-full absolute top-0 left-0">
          {currentArtworks.map((artwork) => (
            <DesignerItemContainer
              key={artwork.id}
              handleDeleteComponent={handleDeleteArtwork}
              height={artwork.height}
              id={artwork.id}
              isAspectRatioLocked={isAspectRatioLocked}
              onComponentClick={handleArtworkClick}
              onDragStop={onDragStop}
              onResize={onResize}
              selectedArtworkId={selectedArtworkId}
              width={artwork.width}
              x={artwork.x}
              y={artwork.y}
              dragNDropType="artwork"
            >
              <Image
                src={artwork.data}
                alt="Artwork"
                width={120}
                height={120}
                className="w-full h-full"
                draggable={false}
              />
            </DesignerItemContainer>
          ))}
          {currentTextboxes.map((textbox) => (
            <DesignerItemContainer
              key={textbox.id}
              handleDeleteComponent={handleDeleteTextbox}
              height={textbox.height}
              id={textbox.id}
              isAspectRatioLocked={isAspectRatioLocked}
              onComponentClick={handleTextboxClick}
              onDragStop={onDragStop}
              onResize={onResize}
              selectedArtworkId={selectedArtworkId}
              width={textbox.width}
              x={textbox.x}
              y={textbox.y}
              dragNDropType="textbox"
            >
              <Textbox editor={textbox.editor} />
            </DesignerItemContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesginerBodyImageSection;
