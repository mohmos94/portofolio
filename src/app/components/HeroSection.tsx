// app/components/HeroSection.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import CustomButton from './CustomButton';

import Avatar from '@mui/material/Avatar';


export default function HeroSection() {
    return (
        <Box textAlign="center" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>

            <Avatar
                alt="Profilbilde av Mostafa Mohammedi"
                src="../mostafa.jpg"
                sx={{ width: 150, height: 150, marginBottom: '1.5rem' }}
            />
            <Typography variant="subtitle1" sx={{ color: '#64ffda', fontWeight: 'bold' }}>
                Hei, mitt navn er
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ccd6f6' }}>
                Mostafa Mohammedi.
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#8892b0', mb: 2 }}>
                Jeg utvikler ERP-løsninger innenfor økonomi.
            </Typography>
            <Typography variant="body1" sx={{ color: '#8892b0', maxWidth: 600, margin: '0 auto', mb: 3 }}>
                Jeg er en programvareingeniør med spesialisering i utvikling av ERP-systemer for økonomiske prosesser. Jeg jobber primært med Java i backend, hvor jeg bygger robuste og sikre API-er og tjenester, samt React i frontend, som gir brukerne en moderne og intuitiv opplevelse. Mitt mål er å skape brukervennlige løsninger som gjør økonomistyring enklere og mer effektiv for bedrifter.
            </Typography>
            <CustomButton text="Se mine prosjekter!" />
        </Box>
    );
}
