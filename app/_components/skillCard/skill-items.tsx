import Image from 'next/image'
import React from 'react'
import SkillItemCard from './skill-item-card'

export const SkillItems = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
            <SkillItemCard src='https://img.icons8.com/color/48/000000/python--v1.png' alt='Python' title='Python' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/c-plus-plus-logo.png' alt='C++' title='C++' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/javascript--v1.png' alt='JavaScript' title='JavaScript' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/html-5--v1.png' alt='HTML'  title='HTML'/>
            <SkillItemCard src='https://img.icons8.com/color/48/000000/css3.png' alt='CSS' title='CSS' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/typescript.png' alt='TypeScript' title='TypeScript' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/react-native.png' alt='React' title='React' />
            <SkillItemCard className='dark:bg-muted-foreground' src='https://img.icons8.com/color/48/000000/nextjs.png' alt='Next.js' title='Next.js' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/nodejs.png' alt='Node'  title='Node'  />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/mongodb.png' alt='MongoDB' title='MongoDB' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/redux.png' alt='Redux' title='Redux' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/firebase.png' alt='Firebase' title='Firebase' />
            <SkillItemCard src='https://img.icons8.com/color/48/000000/git.png' alt='Git' title='Git' />
        </div>
    )
}