import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import { Button } from '../components/button';
import { ActivitiesList } from '../components/activities-list';

export default function Experiences() {
    return(
        <div className='px-5'>
            <header className='py-8 flex flex-col gap-5'>
                <div className='flex items-center justify-between gap-5'>
                    <FormControl variant="outlined" className='w-full'>
                    <OutlinedInput
                        placeholder='Art'
                        startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                        }
                    />
                    </FormControl>
                    <IconButton size='medium' sx={{border: '1px solid grey'}}>
                        <TuneIcon fontSize='large'/>
                    </IconButton>
                </div>

                <Typography>Home / Experiences</Typography>

                <div>
                    <div className='flex justify-between'>
                        <Button title='Activity Type' bgColor='#775A0B'/>    
                        <Button title='Price' bgColor='#775A0B'/>    
                        <Button title='Available languages' bgColor='#775A0B'/>    
                    </div>
                </div>
            </header>
            <main className='flex flex-col gap-10 pb-10'>
                <ActivitiesList />
                <Button title='Show more' bgColor='#3B6939' width='w-full'/>
            </main>
        </div>
    )
}