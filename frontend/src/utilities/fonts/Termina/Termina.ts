import localFont from 'next/font/local';

const Termina = localFont({
  src: [
    {
      path: './Termina-Black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-termina',
  preload: true,
});

export default Termina.className;
