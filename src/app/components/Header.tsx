// app/components/Header.tsx

"use client"; // Marker som Client Component

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    // Oppdaterer menuItems med id-er som matcher seksjonene på siden
    const menuItems = [
        { text: '01. Om Meg', href: '#about' },
        { text: '02. Erfaring', href: '#experience' },
        { text: '03. Utdanning', href: '#education' },
        { text: '04. Kontakt', href: '#contact' }
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: '#0a192f', boxShadow: 'none', padding: '1rem 0' }}>
            <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 'lg', margin: 'auto', width: '100%' }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: '#64ffda' }}>
                    <PersonIcon sx={{ mr: 1 }} /> {/* Viser PersonIcon med mellomrom til høyre */}
                </Typography>

                {isMobile ? (
                    <>
                        {/* Mobile menu button */}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ color: '#64ffda' }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Drawer for mobile menu */}
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <Box
                                sx={{ width: 250, backgroundColor: '#0a192f', height: '100%', color: '#ccd6f6' }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {menuItems.map((item, index) => (
                                        <ListItem component="div" key={index} onClick={() => setDrawerOpen(false)}>
                                            <ListItemText>
                                                <Link href={item.href} color="inherit" underline="none" sx={{ color: '#8892b0', cursor: 'pointer' }}>
                                                    {item.text}
                                                </Link>
                                            </ListItemText>
                                        </ListItem>
                                    ))}
                                    <ListItem component="div">
                                        <Button
                                            variant="outlined"
                                            href="/Mostafa_Mohammedi_CV.pdf"  // Stien til PDF-filen
                                            download="Mostafa_Mohammedi_CV.pdf"  // Filnavn ved nedlasting
                                            sx={{ borderColor: '#64ffda', color: '#64ffda', width: '100%' }}
                                        >
                                            Last ned CV
                                        </Button>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{ display: 'flex', gap: '2rem', color: '#8892b0', alignItems: 'center' }}>
                        {/* Desktop menu items */}
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.href} color="inherit" underline="none" sx={{ color: '#8892b0', cursor: 'pointer' }}>
                                {item.text}
                            </Link>
                        ))}
                        <Button
                            variant="outlined"
                            href="/Mostafa-Mohammedi_cv.pdf"
                            download="Mostafa-Mohammedi_cv.pdf"
                            sx={{ borderColor: '#64ffda', color: '#64ffda' }}
                        >
                            Last ned CV
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
