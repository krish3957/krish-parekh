import Image from 'next/image'

const Education = () => {
    return (
        <div className='flex items-center py-5'>
            <Image className='bg-transperent mr-2' src='https://upload.wikimedia.org/wikipedia/en/f/f1/Pandit_Deendayal_Energy_University_logo.png' width={70} height={70} alt='education' />
            <div className='items-left'>
                <strong className='text-lg'>Pandit Deendayal Energy University</strong>
                <p className='text-xl'>B.Tech in Information & Communication Technology</p>
            </div>
        </div>
    )
}

export default Education