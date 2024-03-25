import { ButtonComponent } from '../components/ui/button';
import { TagComponent } from '../components/ui/tag';
import { ActivitiesList } from './activities-list';

import { Button, Icon, Input } from 'keep-react';
import { Typography } from 'keep-react';

import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaSliders } from "react-icons/fa6";
import { BreadcrumbComponent } from '../components/ui/breadcrumbs';

export default function Experiences() {
    return (
        <div className='px-5'>
            <header className='py-8 flex flex-col gap-5'>
                <div className='flex items-center justify-between gap-5'>
                <fieldset className="relative w-full">
                    <Input placeholder="Art" className="ps-12" />
                        <Icon>
                            <FaMagnifyingGlass className='text-xl text-[#8a8a8a]' />
                        </Icon>
                    </fieldset>
                    <Button shape='circle' className='bg-transparent hover:bg-slate-200 text-[#171D1E] w-12 border'>
                        <FaSliders className='text-xl' />
                    </Button>
                </div>

                <BreadcrumbComponent />

                <div>
                    <div className='flex justify-between'>  
                        <TagComponent label='Activity type' />
                        <TagComponent label='Price' />
                        <TagComponent label='Available languages' />
                    </div>
                </div>
            </header>
            <main className='flex flex-col gap-10 pb-10'>
                <ActivitiesList />
                <ButtonComponent title='Show more' bgColor='#3B6939' width='w-full'/>
            </main>
        </div>
    )
}