'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type PropTypes = {
  imageSrc: string;
};

const ImageModal: React.FC<PropTypes> = ({ imageSrc }) => {
  const [showModal, setShowModal] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);
  const [modalImgLoaded, setModalImgLoaded] = useState(false);

  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    showModal ? modalRef.current.showModal() : modalRef.current.close();
  }, [showModal]);

  const onAddImageButtonClicked = async () => {
    setShowModal(true);
  };

  return (
    <div>
      <button
        onClick={onAddImageButtonClicked}
        type="button"
        className="w-[6rem] h-[6rem] md:w-[15rem] md:h-[15rem] md:w-[18rem] md:h-[18rem] hover:scale-105 transition-transform duration-300 relative"
      >
        {!thumbLoaded && (
          <div className="skeleton w-full h-full absolute top-0 left-0 rounded-xl z-10" />
        )}
        <Image
          src={imageSrc}
          width={300}
          height={300}
          alt="past-project"
          className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${thumbLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          onLoad={() => setThumbLoaded(true)}
          onError={() => setThumbLoaded(true)}
        />
      </button>
      <dialog ref={modalRef} id="past-projects-modal" className="modal">
        <div className="modal-box p-0 w-full h-full bg-white">
          <form method="dialog">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="btn btn-sm btn-circle btn-ghost text-primaryT bg-black hover:bg-secondaryT absolute right-2 top-2 z-10"
            >
              ✕
            </button>
          </form>
          <div className="w-full h-full relative">
            {!modalImgLoaded && (
              <div className="skeleton w-full h-full absolute top-0 left-0 rounded-xl z-10" />
            )}
            <Image
              src={imageSrc}
              width={1000}
              height={1000}
              alt="past-project"
              className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${modalImgLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              onLoad={() => setModalImgLoaded(true)}
              onError={() => setModalImgLoaded(true)}
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setShowModal(false)}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ImageModal;
