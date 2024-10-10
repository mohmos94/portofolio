// app/components/ContactForm.tsx
"use client"; // Marker denne som en klientkomponent

import React, { useRef, useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const form = useRef<HTMLFormElement | null>(null);
    const [statusMessage, setStatusMessage] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current !== null) {
            emailjs.sendForm(
                'service_atqmcu8',       // Din Service ID
                'template_wua0q0u',      // Template ID
                form.current,
                'uoUKm9ltrZU-1DTef'      // Public Key (User ID)
            )
                .then(() => {
                    setStatusMessage("Meldingen din har blitt sendt!");
                    form.current?.reset();
                }, (error) => {
                    console.error(error.text);
                    setStatusMessage("Noe gikk galt. Vennligst prøv igjen.");
                });
        }
    };

    return (
        <Box id="contact">
            <Typography variant="h6" sx={{ color: '#64ffda', mb: 1 }}>
                Kontakt meg
            </Typography>
            <Box
                component="form"
                ref={form}
                onSubmit={sendEmail}
                sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
            >
                <TextField
                    label="Navn"
                    name="from_name"  // Merk at dette må samsvare med {{from_name}} i malen
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                        input: { color: '#ccd6f6' },
                        label: { color: '#8892b0' },
                        "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: '#64ffda' } },
                    }}
                />
                <TextField
                    label="E-post"
                    name="from_mail"  // EmailJS forventer at dette er e-postfeltet
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    sx={{
                        input: { color: '#ccd6f6' },
                        label: { color: '#8892b0' },
                        "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: '#64ffda' } },
                    }}
                />
                <TextField
                    label="Melding"
                    name="message"  // Merk at dette må samsvare med {{message}} i malen
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    sx={{
                        input: { color: '#ccd6f6' },
                        label: { color: '#8892b0' },
                        "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: '#64ffda' } },
                    }}
                />
                <Button type="submit" variant="outlined" sx={{ borderColor: '#64ffda', color: '#64ffda' }}>
                    Send
                </Button>
            </Box>
            {statusMessage && (
                <Typography variant="body2" sx={{ color: '#64ffda', mt: 2 }}>
                    {statusMessage}
                </Typography>
            )}
        </Box>
    );
}
