// app/components/Footer.js
import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#0a192f',
                color: '#ccd6f6',
                textAlign: 'center',
                py: 3,
                mt: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="body2" sx={{ mb: 1 }}>
                &copy; {new Date().getFullYear()} Mostafa Mohammedi. Alle rettigheter reservert.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="https://github.com/mohmos94" target="_blank" rel="noopener" color="inherit">
                    <GitHubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/mostafa-m-525aab1a0/" target="_blank" rel="noopener" color="inherit">
                    <LinkedInIcon />
                </Link>
            </Box>
        </Box>
    );
}
