export default function Contact({email}) {
    return (
        <div className='flex flex-col p-6 border-2  m-5 w-60'>
            <div className='flex flex-col text-lg'>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        </div>
    );
}