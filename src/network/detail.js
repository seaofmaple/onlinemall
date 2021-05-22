import {require} from './require' 
 
export function getDetailData(iid) {
  return require({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return require({
    url: '/recommend',
  })
}