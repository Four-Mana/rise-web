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
  formName: string;
}

export const articlesList: articleListType[] = [
  {
    front: FrankFrontImg,
    back: FrankBackImg,
    description: "",
    formName: "frank-tshirt",
    name: "Frank T-Shirt",
    price: "50.00$",
    variants: "XS S M L XL",
  },
  {
    name: "Breathing Again T-Shirt",
    formName: "album-tshirt",
    front: AlbumFrontImg,
    description: "",
    price: "50.00$",
    variants: "XS S M L XL",
  },
  {
    front: AlbumImg,
    name: "Breathing Again Album",
    formName: "album",
    description: "",
    price: "50.00$"
  }
]