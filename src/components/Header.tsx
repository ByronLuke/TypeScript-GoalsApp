import { ReactNode } from "react"

type HeaderProps={
    children: ReactNode;
    image: {
        src: string;
        alt:string;
    };
}

export default function Header({image,children}: HeaderProps){
    return(
        <header>
            <img src={image.src} alt={image.alt}/>
            {/* <img {...image}/> */}
            {children}
        </header>
    )
}