import {require} from './require'

export function getCategoryMessage() {
  return require({
    url: '/category',
  })
}

export function getCategoryDetailMsg(maitKey) {
  return require({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getDetailCategory(miniWallkey,type) {
  return require({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}