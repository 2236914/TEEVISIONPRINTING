import React from 'react';
import Image from 'next/image';

type PropTypes = {
  member: {
    imageSrc: string;
    name: string;
    role: string;
  };
};

const MemberCard: React.FC<PropTypes> = ({ member }) => {
  return (
    <div className="card" key={member.name}>
      <div className="flex flex-col items-center gap-2 p-4">
        <Image
          src={member.imageSrc}
          alt="Member"
          width={300}
          height={300}
          className="w-[10rem] h-[13rem] xl:w-[20rem] xl:h-[26rem] object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        />
        <h3 className="font-bold text-lg xl:text-xl">{member.name}</h3>
        <p className="text-sm xl:text-md text-gray-500">{member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
