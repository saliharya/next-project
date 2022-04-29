import Image from 'next/image'

export default function CertificateImage(props) {

    return (
        <a href={props.href} className="svg-certificate-style">
            <Image src={props.src} alt="Kotlin Certificate" width={783} height={554}/>
        </a>
    )
}