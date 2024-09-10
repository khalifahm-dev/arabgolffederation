'use client';
import Image from 'next/image'
import imgMain from '@/public/welcome.webp'
import '@/app/components/welcome.css';

export default function AppImage() {
    const imgLoader = ({src,width,quality}:any)=>{
        return `http://localhost:3000${src}?w=700&q=${quality || 80}`
        }
        return (
            <Image className='intoImg' loader={imgLoader}  width={720} height={596} quality={50} src={imgMain.src} alt="" loading="lazy" />
        );
}
