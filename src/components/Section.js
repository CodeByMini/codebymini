export function SectionRow({children}) {
    return (
        <div className='flex flex-row justify-center align-middle w-full h-[100vh]'>
            {children}
        </div>
    );
}

export function SectionCol({children}) {
    return (
        <div className='flex flex-col justify-center align-middle w-full h-[100vh]'>
                <div className='flex flex-row justify-center align-middle'>
                {children}
            </div>
        </div>

    );
}