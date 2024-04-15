import * as React from 'react';
import Button from '@mui/material/Button';
import Header from '../components/Header';
import GridItem from '@/components/GridItem';
import PictureGrid from '@/components/PictureGrid';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  return (

    <main
     
    >
      <Header />
      <PictureGrid/>
      <Button variant='contained'>Test!</Button>

    </main>

  );
}
