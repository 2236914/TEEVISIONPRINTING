import Image from 'next/image';

const TvpFlagIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Image
    src="/icon.png"
    alt="TVP"
    width={20}
    height={20}
    className={className}
  />
);

export default TvpFlagIcon;
