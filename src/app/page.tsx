import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: '#0a192f', color: '#ccd6f6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container maxWidth="md" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeroSection />
      </Container>
      <Footer />
    </Box>
  );
}
