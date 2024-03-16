export function CardWrapper({children}) {
    return (
        <div className='flex flex-col p-6 shadow-2xl border-2 bg-[#282c34] shadow-gray-900 rounded-lg m-5 w-60 border-neutral-600'>{children}</div>
    )}

export default function Card({title, subtitle, date}) {
    return (
        <CardWrapper>
            <div className='flex flex-col text-lg items-center mb-4'>
                {title}
            </div>
            {subtitle && (
                <div className='flex flex-col text-sm justify-center items-center mb-4'>
                    {subtitle.map((sub) => {
                        return (
                            <div key={Math.random()}>
                            {sub}
                        </div>
                    );
                    })}
                </div>
            )}
        {date && (
            <div className='flex flex-col text-sm items-end'>
                {date}
            </div>
        )}
        </CardWrapper>

    );
}