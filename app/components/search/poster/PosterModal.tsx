import React from 'react';

type PosterModalProps = {
    isOpen: boolean;
    onClose: () => void;
    city: string;
    created: Date;
    description: string;
    expriation: string;
    imageREF: string;
    keyword: string
    neighborhood: string;
    owner: string;
    reccuring: Date;
    title: string
    url: string;
};

const PosterModal: React.FC<PosterModalProps> = ({isOpen, onClose, city, created, description, expriation, imageREF, keyword, neighborhood, owner, reccuring, title, url }) => {
    
    return <div className={`overscroll-none fixed inset-0 flex justify-center items-center transition-colors ${isOpen ? "visible bg-black/40" : "invisible"}`}>
        <div className={`bg-white rounded-xl shadow w-1/2 p-6 transition-all ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            

            <div className='flex justify-center p-2 '>
                <div className='text-xl p-3 grid grid-cols-2 gap-4'>
                    <div>
                        <img src={url} alt="Poster Image" />
                    </div>
                    <div className='grid grid-row row-span-2 content-between'>
                        <div>
                            <h1 className='text-3xl font-bold'>{title}</h1>
                            <p className='text-lg w-1/4 truncate'>{"fkajdfkasjf kajsdfkajsdfkjadsf jdksjfdkjffkajdfkas jfkajsdfkajsdfkjadsfjdksjfdkjfjfkajdfkasjfkajsdfkajsdfkjadsfjdksjfdkjfjfkajdfkasjfkajsdfkajsdfkjadsfjdksjfdkjfjfkajdfkasjfkajsdfkajsdfkjadsfjdksjfdkjfjfkajdfkasjfkajsdfkajsdfkjadsfjdksjfdkjfjfkajdfkasjfkajsdfkajsdfkjadsfjdksjfdkjfjfkajdfkasjfkajsdfkajsdfkjadsfjdksjfdkjfjfkajdfkasjfkajsdfkajsdfkjadsfjdksjfdkjfjj"}</p>
                        </div>
                        <div>
                            I am a button
                        </div>
                    </div>
                </div>

                <button onClick={onClose}>
                    <span className="absolute top-2 right-1 material-symbols-outlined"> close</span>
                </button>
            </div>
        </div>
    </div>
}
export default PosterModal;