import * as React from 'react';
import Button from '@mui/material/Button';
import Header from '../components/Header';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function Home() {
  return (

    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Header />
      <Button variant='contained'>Hello!</Button>

    </main>

  );
}
