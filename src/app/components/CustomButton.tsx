// app/components/CustomButton.tsx
import React from 'react';
import { Button } from '@mui/material';

interface CustomProps {
    text: string;
}

export default function CustomButton({ text }: CustomProps) {
    return (
        <Button
            variant="outlined"
            sx={{ borderColor: '#64ffda', color: '#64ffda', padding: '0.75rem 1.5rem', fontSize: '1rem' }}
            href="https://github.com/mohmos94?tab=repositories" // Peker til GitHub-kontoen din
            target="_blank" // Åpner lenken i en ny fane
            rel="noopener noreferrer" // Sikkerhetsinnstillinger for eksterne lenker
        >
            {text}
        </Button>
    );
}
