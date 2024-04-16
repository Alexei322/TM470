import * as React from 'react';
import Button from '@mui/material/Button';
import Header from '../components/Header';
import PictureGrid from '@/components/PictureGrid';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  return (

    <main>
      <Header />
      <div className='flex flex-col items-center'>
        <PictureGrid/>
        <Button variant='contained'>Test!</Button>
      </div>
      

    </main>

  );
}
