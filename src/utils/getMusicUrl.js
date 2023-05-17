export const getMusicUrl = (id)=>{
  if(!id) return 
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}