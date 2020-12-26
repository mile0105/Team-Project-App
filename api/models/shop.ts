export interface ShopResponse {
  uid: string,
  fullShop: boolean,
  endingDates: EndingDates,
  featured: Item[],
  daily: Item[],
  specialFeatured: Item[],
  specialDaily: Item[],
  community: Item[],
  offers: Item[],
}

export interface EndingDates {
  daily: string,
  featured: string,
}

export interface Item {
  id: string,
  name: string,
  description: string,
  type: string,
  rarity: string,
  internalRarity: string,
  price: number,
  priceNoDiscount: number,
  categories: string,
  priority: number,
  banner: string,
  offer: string,
  releaseDate: Date | string,
  lastAppearance: Date | string,
  interest: number,
  giftAllowed: boolean,
  buyAllowed: boolean,
  image: string,
  icon: string,
  full_background: string,
  items: string[],
  otherItemsDetails: InternalItem[],
  videos: string[],
  customColors: string[] | null
}

export interface InternalItem {
  id: string,
  name: string,
  description: string,
  type: string,
  rarity: string,
  internalRarity: string,
  images: {
    icon: string,
    featured: string,
    background: string,
    full_background: string,
  }
}
