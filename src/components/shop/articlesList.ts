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
}

export const articlesList: articleListType[] = [
  {
    front: FrankFrontImg,
    back: FrankBackImg,
    description: "",
    name: "Frank T-Shirt",
    price: "50.00$",
    variants: "XS S M L XL",
  },
  {
    front: AlbumFrontImg,
    description: "",
    name: "Breathing Again T-Shirt",
    price: "50.00$",
    variants: "XS S M L XL",
  },
  {
    front: AlbumImg,
    name: "Breathing Again Album",
    description: "",
    price: "50.00$"
  }
]