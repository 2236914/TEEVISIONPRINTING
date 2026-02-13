import React from 'react';

type PropTypes = {
  vision: {
    description: string;
    icon: React.JSX.Element;
    title: string;
  };
};

const VisionCard: React.FC<PropTypes> = ({ vision }) => {
  return (
    <div className="card shadow-xl max-w-[37rem]">
      <div className="p-6">
        <div className="flex gap-8">
          <div className="pt-[0.2rem]">{vision.icon}</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{vision.title}</h3>
            <p className="text-gray-500">{vision.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionCard;
