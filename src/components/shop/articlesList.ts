import FrankFrontImg from './assets/tshirt-frank-front.png'
import FrankBackImg from './assets/tshirt-frank-back.png'
import AlbumFrontImg from './assets/tshirt-album-front.png'
import AlbumImg from './assets/breathingAgain.png'
import DerangeFrontImg from './assets/derange_front.jpg'
import DerangeBackImg from './assets/derange_back.jpg'
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
    front: AlbumImg,
    name: "Breathing Again Album",
    formName: "album",
    description: "",
    price: "10,00€"
  },
  {
    front: FrankFrontImg,
    back: FrankBackImg,
    description: "",
    formName: "frank-tshirt",
    name: "Frank T-Shirt",
    price: "15.00€",
    variants: "5-6Y S M L XL",
  },
  {
    name: "Breathing Again T-Shirt",
    formName: "album-tshirt",
    front: AlbumFrontImg,
    description: "",
    price: "15.00€",
    variants: "5-6Y S M L XL",
  },
  {
    front: DerangeFrontImg,
    back: DerangeBackImg,
    name: "Derange Album",
    formName: "derange-album",
    description: "",
    price: "5.00€"
  },
]