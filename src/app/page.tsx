// app/page.js
import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

export default function HomePage() {
  return (
    <Box sx={{ backgroundColor: '#0a192f', color: '#ccd6f6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      {/* Hero Section som introduserende seksjon */}
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <HeroSection />
      </Box>

      {/* Main Content seksjon med Om Meg, Erfaring, og Utdanning */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <MainContent />
      </Container>

      <Footer />
    </Box>
  );
}
