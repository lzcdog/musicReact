export const getCount = (num)=>{
  if(num<0) return
  if(num<10000){
    return num
  }
  if(num>=10000){
    return (num/10000).toFixed(1) + '万'
  }
  if(num>=1000000000){
    return (num/1000000000).toFixed(1) + '亿'
  }
}