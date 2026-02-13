import localFont from 'next/font/local';

const MaisonNeue = localFont({
  src: [
    {
      path: './Maison_Neue_Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Maison_Neue_Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Maison_Neue_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Maison_Neue_ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-maison-neue',
  preload: true,
});

export default MaisonNeue.className;
