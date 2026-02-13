import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});

export default roboto.className;
