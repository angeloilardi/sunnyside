import Image from "next/image"

export default function Testimonials(props: { icon: string, name: string, content: string, position: string }) {
    
    return <div className="flex flex-col items-center px-10">
        <Image src={props.icon} width={75} height={75} alt='' className="rounded-full mb-10"/>
        <p className="mb-10 font-barlow text-cool_gray text-center">{props.content}</p>
        <p className="mb-4 font-fraunces text-xl">{props.name}</p>
        <p className="font-barlow tracking-tight text-french_gray">{props.position}</p>
    </div>
    
}