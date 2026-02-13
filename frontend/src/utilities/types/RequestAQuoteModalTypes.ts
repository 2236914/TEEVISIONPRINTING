/* eslint-disable typescript-sort-keys/interface */
export type RequestAQuoteModalFormData = {
  fullName: string;
  email: string;
  dueDate: string;
  phoneNumber: string;
  product: string;
  quantityBySizes: {
    XS: number;
    S: number;
    M: number;
    LG: number;
    XL: number;
    '2XL': number;
    '3XL': number;
    '4XL': number;
    '5XL': number;
  };
  frontNumberOfColors: number;
  backNumberOfColors: number;
  createArtwork: boolean;
  needDesigner: boolean;
  additionalNotes: string;
  event: string;
  color: string;
  hasSpecialRequest: boolean;
  artworkImageUrl: string;
  pricePerShirt: number;
  totalPrice: number;
};

export type AddQuoteType = {
  additionalNotes: string;
  artworkImageUrl: string;
  createArtwork: boolean;
  dueDate: string;
  email: string;
  extraSmallQuantity: number;
  extraLargeQuantity: number;
  fiveExtraLargeQuantity: number;
  fourExtraLargeQuantity: number;
  frontNumberOfColors: number;
  backNumberOfColors: number;
  fullName: string;
  hasSpecialRequest: boolean;
  largeQuantity: number;
  mediumQuantity: number;
  needsDesigner: boolean;
  phoneNumber: string;
  pricePerShirt: string;
  productColor: string;
  productName: string;
  smallQuantity: number;
  threeExtraLargeQuantity: number;
  totalPrice: string;
  twoExtraLargeQuantity: number;
};

export const convertToAddQuoteType = (
  formData: RequestAQuoteModalFormData
): AddQuoteType => {
  return {
    additionalNotes: formData.additionalNotes,
    artworkImageUrl: formData.artworkImageUrl,
    createArtwork: formData.createArtwork,
    dueDate: formData.dueDate,
    email: formData.email,
    extraLargeQuantity: formData.quantityBySizes.XL,
    extraSmallQuantity: formData.quantityBySizes.XS,
    fiveExtraLargeQuantity: formData.quantityBySizes['5XL'],
    fourExtraLargeQuantity: formData.quantityBySizes['4XL'],
    frontNumberOfColors: formData.frontNumberOfColors,
    backNumberOfColors: formData.backNumberOfColors,
    fullName: formData.fullName,
    hasSpecialRequest: formData.hasSpecialRequest,
    largeQuantity: formData.quantityBySizes.LG,
    mediumQuantity: formData.quantityBySizes.M,
    needsDesigner: formData.needDesigner,
    phoneNumber: formData.phoneNumber,
    pricePerShirt: String(formData.pricePerShirt),
    productColor: formData.color,
    productName: formData.product,
    smallQuantity: formData.quantityBySizes.S,
    threeExtraLargeQuantity: formData.quantityBySizes['3XL'],
    totalPrice: String(formData.totalPrice),
    twoExtraLargeQuantity: formData.quantityBySizes['2XL'],
  };
};