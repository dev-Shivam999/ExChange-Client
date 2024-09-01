import { ReactNode, memo } from 'react';

const Pro = memo(({ children, api }: { children: ReactNode, api: (e: React.FormEvent<HTMLFormElement>) => void }) => {
    return (
        <div className=' h-[86vh] w-full flex bg-white justify-center items-center'>
            <form onSubmit={(e) => api(e)} className='h-[85vh] text-center font-mono text-[5vw] sm:text-3xl w-11/12 md:h-full md:w-3/5  text-black'>
                <div className='flex flex-col border-black border-2 rounded-lg mt-4 justify-center h-[90%] items-center gap-3'>

                    {children}

                </div>
            </form>
        </div>
    );
});

export default Pro;
