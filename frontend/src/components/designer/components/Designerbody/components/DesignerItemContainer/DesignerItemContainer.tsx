import React from 'react';
import { Rnd } from 'react-rnd';

import type { DragNDropType } from '@/components/designer/components/Designerbody/DesignerBody';
import Move from '@/utilities/SVGs/Move';
// import Rotate from '@/utilities/SVGs/Rotate';
import Trash from '@/utilities/SVGs/Trash';

type PropTypes = {
  children: React.ReactNode;
  dragNDropType: DragNDropType;
  handleDeleteComponent: (id: string) => void;
  height: string | number;
  id: string;
  isAspectRatioLocked: boolean;
  onComponentClick: (id: string) => void;
  onDragStop: (
    event: any,
    data: any,
    id: string,
    dragNDropType: DragNDropType
  ) => void;
  onResize: (
    dir: string,
    ref: any,
    id: string,
    position: { x: number; y: number },
    dragNDropType: DragNDropType
  ) => void;
  selectedArtworkId: string | null;
  width: string | number;
  x: number;
  y: number;
};

const DesignerItemContainer: React.FC<PropTypes> = ({
  children,
  onResize,
  onDragStop,
  width,
  height,
  x,
  y,
  id,
  onComponentClick,
  isAspectRatioLocked,
  selectedArtworkId,
  handleDeleteComponent,
  dragNDropType,
}) => {
  // const rotateRef = React.useRef<HTMLButtonElement>(null);
  // const [styleState, setStyleState] = React.useState({
  //   radians: 0,
  // });

  // const getRelativeCoordinates = (event: any) => {
  //   if (!rotateRef.current) return { mousex: 0, mousey: 0 };
  //   const clientRect = rotateRef.current.getBoundingClientRect();
  //   return {
  //     mousex: event.pageX - clientRect.left - clientRect.width / 2,
  //     mousey: event.pageY - clientRect.top - clientRect.height / 2,
  //   };
  // };

  // const calculateDegrees = (coordinates: any) => {
  //   const rad = Math.atan2(coordinates.mousex, coordinates.mousey);
  //   const deg = rad * (-180 / Math.PI);
  //   return { degrees: deg, radians: rad };
  // };

  // const onRotating = (degrees: any) => {
  //   const localLeft = -(Number(width) / 2);
  //   const localTop = -(Number(height) / 2);
  //   const rotatedTop =
  //     localLeft * Math.cos(degrees.radians) -
  //     localTop * Math.sin(degrees.radians);
  //   const rotatedLeft =
  //     localLeft * Math.sin(degrees.radians) +
  //     localTop * Math.cos(degrees.radians);

  //   setStyleState((prevState) => ({
  //     ...prevState,
  //     transform: `rotateZ(${degrees.degrees}deg)`,
  //     ...degrees,
  //     rotatedLeft,
  //     rotatedTop,
  //   }));
  // };

  // const handleMouseMove = (event: MouseEvent) => {
  //   // if (isRotating) {
  //   const newDegrees = calculateDegrees(getRelativeCoordinates(event));
  //   onRotating(newDegrees);
  //   // }
  // };

  // const handleMouseUp = () => {
  //   // setIsRotating(false);
  //   document.removeEventListener('mousemove', handleMouseMove);
  //   document.removeEventListener('mouseup', handleMouseUp);
  // };

  // const handleRotateStart = (event: React.MouseEvent) => {
  //   event.preventDefault();
  //   document.addEventListener('mousemove', handleMouseMove);
  //   document.addEventListener('mouseup', handleMouseUp);
  // };

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      size={{ width: width, height: height }}
      position={{ x: x, y: y }}
      onResize={(event, dir, ref, delta, position) =>
        onResize(dir, ref, id, position, dragNDropType)
      }
      onDragStop={(event, data) => onDragStop(event, data, id, dragNDropType)}
      key={id}
      bounds="parent"
      lockAspectRatio={isAspectRatioLocked}
      onClick={() => onComponentClick(id)}
      id={`item-${id}`}
      dragHandleClassName="drag-handle"
      resizeHandleStyles={selectedArtworkId === id ? resizeHandleStyles : {}}
      // resizeHandleWrapperStyle={{
      //   ...styleState,
      //   width: '100%',
      //   height: '100%',
      //   position: 'absolute',
      //   top: 0,
      // }}
      className="relative"
    >
      <div
        style={{
          outline: selectedArtworkId === id ? '2px solid #FFCD00' : 'none',
          padding: '0.5rem',
          zIndex: selectedArtworkId === id ? 1 : 0,
          // ...styleState,
        }}
      >
        {children}
        {selectedArtworkId === id && (
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Delete Button */}
            <div className="absolute w-full flex justify-center -bottom-8 cursor-default">
              <div className="flex bg-primaryT w-fit p-[0.2rem] rounded">
                <button onClick={() => handleDeleteComponent(id)}>
                  <Trash width={16} height={16} color="black" />
                </button>
              </div>
            </div>

            {/* Move Button */}
            <div className="absolute w-full flex gap-2 justify-center -top-8">
              <div className="flex bg-primaryT w-fit p-[0.2rem] rounded">
                <button className="cursor-move drag-handle">
                  <Move width={16} height={16} color="black" />
                </button>
              </div>
              {/* <div className="flex bg-primaryT w-fit p-[0.2rem] rounded">
                <button
                  className="cursor-grab"
                  ref={rotateRef}
                  onMouseDown={handleRotateStart}
                >
                  <Rotate width={16} height={16} color="black" />
                </button>
              </div> */}
            </div>

            {/* <div className="absolute w-full flex gap-2 justify-end -top-8 -right-8">
              <div className="flex bg-primaryT w-fit p-[0.2rem] rounded">
                <button
                  className="cursor-grab"
                  ref={rotateRef}
                  onMouseDown={() => setIsRotating(true)}
                >
                  <Rotate width={16} height={16} color="black" />
                </button>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </Rnd>
  );
};

const resizeHandleStyles = {
  left: {
    width: '0.4rem',
    height: '0.4rem',
    top: '50%',
    backgroundColor: 'white',
    transform: 'translateY(-50%)',
    left: '-4px',
  },
  right: {
    width: '0.4rem',
    height: '0.4rem',
    top: '50%',
    backgroundColor: 'white',
    transform: 'translateY(-50%)',
    right: '-4px',
  },
  top: {
    width: '0.4rem',
    height: '0.4rem',
    left: '50%',
    backgroundColor: 'white',
    transform: 'translateX(-50%)',
    top: '-4px',
  },
  bottom: {
    width: '0.4rem',
    height: '0.4rem',
    left: '50%',
    backgroundColor: 'white',
    transform: 'translateX(-50%)',
    bottom: '-4px',
  },
  topLeft: {
    width: '0.4rem',
    height: '0.4rem',
    backgroundColor: 'white',
    top: '-4px',
    left: '-4px',
  },
  topRight: {
    width: '0.4rem',
    height: '0.4rem',
    backgroundColor: 'white',
    top: '-4px',
    right: '-4px',
  },
  bottomLeft: {
    width: '0.4rem',
    height: '0.4rem',
    backgroundColor: 'white',
    bottom: '-4px',
    left: '-4px',
  },
  bottomRight: {
    width: '0.4rem',
    height: '0.4rem',
    backgroundColor: 'white',
    bottom: '-4px',
    right: '-4px',
  },
};

export default DesignerItemContainer;
