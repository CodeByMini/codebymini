export default function Card({title, subtitle, date}) {
    return (
        <div className='flex flex-col p-6 border-2 border-orange-600 m-5 w-60'>
            <div className='flex flex-col text-lg'>
                {title}
            </div>
            <div className='flex flex-col text-sm'>

                {subtitle.map((sub) => {
                    return (
                        <div>
                            {sub}
                        </div>
                    );
                }
                )}
            </div>
            <div className='flex flex-col text-sm items-end'>

                {date}
            </div>
        </div>
    );
}