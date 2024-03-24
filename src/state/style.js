import { atom } from 'recoil';

export const selectedStyle = atom({
  key: 'style',
  default:  {value: null,
label: null} ,
});