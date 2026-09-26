import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'#10110f',borderRadius:16,color:'#c7ff4a',fontSize:34,fontWeight:800}}>D</div>,
    { width: 64, height: 64 }
  )
}