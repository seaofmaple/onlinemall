import {require} from './require'

export function getHomeMessage() {
  return require({
    url: '/home/multidata'
  })
}

export function getHomeData(type,page){
  return require({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}