import { CardWrapper } from "./Card";

export default function Contact({email, linkedin, github}) {
    return (
        <CardWrapper>
            <div className="flex flex-row justify-around mb-5">
                <a href={github} target="_new">
                <img src="images/github.png" alt="github" className='h-10 w-10'/>
                </a>
                <a href={linkedin} target="_new">
                <img src="images/linkedin.png" alt="github" className='h-10 w-10'/>
                </a>
            </div>
            <div className='flex flex-col text-lg'>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        </CardWrapper>
    );
}