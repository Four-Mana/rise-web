import FrankFrontImg from './assets/tshirt-frank-front.png'
import FrankBackImg from './assets/tshirt-frank-back.png'
import AlbumFrontImg from './assets/tshirt-album-front.png'
import AlbumImg from './assets/breathingAgain.png'
import { StaticImageData } from 'next/image';

export type articleListType = {
  front: StaticImageData;
  back?: StaticImageData;
  name: string;
  description: string;
  price: string;
  variants?: string;
  blurHash?: string;
};

export const articlesList: articleListType[] = [
  {
    front: FrankFrontImg,
    back: FrankBackImg,
    description: "",
    name: "Frank T-Shirt",
    price: "50.00$",
    variants: "XS S M L XL",
    blurHash: "L8Ihplof00WBt6fQ~qof00ofofWB" 
  },
  {
    front: AlbumFrontImg,
    description: "",
    name: "Breathing Again T-Shirt",
    price: "50.00$",
    variants: "XS S M L XL",
    blurHash: "]%KBREj[~qkC-;RjayRjayWB%MaykCj[Rj-;fQtRj@jY-;j[n%j[WBkWj[n$fQWCxafQM{jtV@jFj[R*ayaetRfQRjj[R*" 
  },
  {
    front: AlbumImg,
    name: "Breathing Again Album",
    description: "",
    price: "50.00$",
    blurHash: "LGDT6DrW0MT0Pp$Lz:S~1Orq}?g4" 
  }
];
