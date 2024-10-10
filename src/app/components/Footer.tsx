// app/components/Footer.tsx
import React from 'react';
import { Box, Grid } from '@mui/material';
import FooterLinks from './FooterLinks';
import ContactForm from './ContactForm';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0a192f',
                color: '#ccd6f6',
                py: 4,
                mt: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Grid container spacing={4} sx={{ maxWidth: '900px', width: '100%' }}>
                <Grid item xs={12} md={6}>
                    <FooterLinks />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ContactForm />
                </Grid>
            </Grid>
        </Box>
    );
}
