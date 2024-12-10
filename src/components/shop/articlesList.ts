import FrankFrontImg from './assets/tshirt-frank-front.png'
import FrankBackImg from './assets/tshirt-frank-back.png'
import AlbumTshirtImg from './assets/tshirt-album-front-new.png'
import AlbumImg from './assets/breathingAgain.png'
import DerangeFrontImg from './assets/derange_front.png'
import DerangeBackImg from './assets/derange_back.png'
import PackFrank from './assets/pack-album-frank.png'
import PackAlbum from './assets/pack-album-tshirt.png'
import { StaticImageData } from 'next/image';


export type articleListType = ArticleCheckboxType & {
  front: StaticImageData;
  back?: StaticImageData;
}

export type ArticleCheckboxType = {
  name: string,
  description: string,
  price: string,
  variants?: string,
  formName: string
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
    variants: "5-6Y|S|M|L|XL",
  },
  {
    name: "Breathing Again T-Shirt",
    formName: "album-tshirt",
    front: AlbumTshirtImg,
    description: "",
    price: "15.00€",
    variants: "5-6Y|S|M|L|XL",
  },
  {
    name: "Derange Album",
    formName: "derange-album",
    front: DerangeFrontImg,
    back: DerangeBackImg,
    description: "",
    price: "5.00€"
  },
  {
    name: "Pack Frank + Album",
    formName: "pack-frank-tshirt",
    front: PackFrank,
    back: FrankBackImg,
    description: "",
    price: "22.00€",
    variants: "5-6Y|S|M|L|XL",
  },
  {
    name: "Pack Breathing Again",
    formName: "pack-album-tshirt",
    front: PackAlbum,
    back: AlbumTshirtImg,
    description: "",
    price: "22.00€",
    variants: "5-6Y|S|M|L|XL",
  },
]

export const articleCheckboxList = [...articlesList, {
  name: "Gastos de envío",
  formName: "shipment-cost",
  front: PackAlbum,
  back: AlbumTshirtImg,
  description: "",
  price: "",
  variants: "España 3€|Europa 7€|Resto 11€",
}]