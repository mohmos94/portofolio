// app/components/AboutSection.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import CustomButton from '../components/CustomButton';

export default function AboutSection() {
    return (
        <Box id="about" sx={{ marginBottom: '3rem' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ccd6f6', mb: 1 }}>
                Mostafa Mohammedi
            </Typography>
            <Typography variant="h5" sx={{ color: '#8892b0', mb: 2 }}>
                Programvareingeniør med spesialisering i ERP-løsninger
            </Typography>
            <Typography variant="body1" sx={{ color: '#8892b0', mb: 3 }}>
                Jeg er en programvareingeniør med spesialisering i utvikling av ERP-systemer for økonomiske prosesser. Jeg jobber primært med Java i backend og React i frontend.
            </Typography>
            <CustomButton text="Se mine prosjekter!" />
        </Box>
    );
}
