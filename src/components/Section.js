export function SectionRow({children, height}) {
    return (
        <div className={`flex flex-row justify-center align-middle w-full`}>
            {children}
        </div>
    );
}

export function SectionCol({children, background}) {
    console.log(background)
    if (!background) {
        return (
            <div className='flex flex-col justify-center align-middle w-full h-[100vh]'>
                <div className='flex flex-row justify-center align-middle'>
                {children}
            </div>
        </div>
        );
    }
    return (
        <div className='flex flex-col justify-center align-middle w-full h-[100vh] bg-fixed bg-cover' style={{backgroundImage: `url(${background})`}}>
            <div className='flex flex-row justify-center align-middle'>
                {children}
            </div>
        </div>
    );
}
