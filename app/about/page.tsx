import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Image from 'next/image';
import Headshot from '../../public/assets/headshot.png';
import Github from '../../public/icons/github_icon.png';
import LinkedIn from '../../public/icons/linkedin_icon.png';
import Link from 'next/link';

type pageProps = {
};

const page:React.FC<pageProps> = () => {
    
    return <div>
        <Navbar />
        <div className='flex flex-col items-center justify-center p-10'>

            <div className='bg-spgreen p-10 rounded-3xl'>
                <div className='flex flex-wrap sm:flex-nowrap max-w-5xl max-h-5xl'>
                    <Image className='block max-w-[250px] max-h-[250px]' src={Headshot} alt={'Head shot of website author.'} />
                    <div className='p-5 text-white text-lg'>
                        <p>
                            Hello! I am Sam! I built this website! Recently, I have found myself looking at telephone poles. A lot. There is some kind of factor that just draws me to them -- I think it is the hyper-local aspect to it. Here are people that are trying to start their club or podcast all in my neighbood.
                        </p>
                        <br />
                        <p>
                            However, there is only one problem. I wish I could see more. So, what do programmers do when they have a problem? They create! So I am super proud to annouce my fullstack project, Telepole.
                        </p>
                        <br />
                        <p>
                            I could not have built this without support. In particular, I want to mention Mira who helped me with everything graphic (inculding the wonderful logo). My brother and Ethan
                            for endless flex, div, and responsive design help. 
                        </p>
                        <br />
                        <p> Page built with React, Next.js, Firebase, and Tailwind.</p>

                        <div className='flex items-center pt-5'>
                            <Link href='https://github.com/sjsikora' className='px-5'><Image src={Github} width={50} height={50} alt={'Github logo.'} /></Link>
                            <Link href='https://www.linkedin.com/in/sam-sikora/'><Image src={LinkedIn} width={50} height={50} alt={'LinkedIn logo.'} /></Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default page;