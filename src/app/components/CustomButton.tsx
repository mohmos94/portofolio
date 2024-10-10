// app/components/CustomButton.js
import React from 'react';
import { Button } from '@mui/material';

interface customProps {
    text: string;
}
export default function CustomButton({ text }: customProps) {
    return (
        <Button variant="outlined" sx={{ borderColor: '#64ffda', color: '#64ffda', padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
            {text}
        </Button>
    );
}
