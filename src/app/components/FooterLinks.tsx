// app/components/FooterLinks.tsx
import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterLinks() {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
                &copy; {new Date().getFullYear()} Mostafa Mohammedi. Alle rettigheter reservert.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
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
