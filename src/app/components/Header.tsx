// app/components/Header.js

"use client"; // Marker som Client Component

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = ['01. Om Meg', '02. Erfaring', '03. Utdanning', '04. Kontakt'];

    return (
        <AppBar position="static" sx={{ backgroundColor: '#0a192f', boxShadow: 'none', padding: '1rem 0' }}>
            <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 'lg', margin: 'auto', width: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#64ffda' }}>B</Typography>

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
                                    {menuItems.map((text, index) => (
                                        <ListItem component="div" key={index} onClick={() => setDrawerOpen(false)}>
                                            <ListItemText primary={text} sx={{ color: '#8892b0', cursor: 'pointer' }} />
                                        </ListItem>
                                    ))}
                                    <ListItem component="div">
                                        <Button variant="outlined" sx={{ borderColor: '#64ffda', color: '#64ffda', width: '100%' }}>
                                            Resume
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
                            <Typography key={index}>{item}</Typography>
                        ))}
                        <Button variant="outlined" sx={{ borderColor: '#64ffda', color: '#64ffda' }}>
                            CV
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
