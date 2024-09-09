'use client';
import Image from 'next/image'
import imgMain from '@/public/welcome.webp'

export default function AppImage() {
    const imgLoader = ({src,width,quality}:any)=>{
        return `http://localhost:3000${src}?w=350&q=${quality || 50}`
        }
        return (
            <Image className='intoImg' loader={imgLoader}  width={576} height={476} quality={50} src={imgMain.src} alt="" />
        );
}
