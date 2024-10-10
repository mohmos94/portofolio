// app/components/MainContent.js
import React from 'react';
import { Container, Box } from '@mui/material';
import NavMenu from '../content/NavMenu';
import ExperienceSection from '../content/ExperienceSection';
import EducationSection from '../content/EducationSection';
import ProjectsSection from '../content/ProjectsSection';

export default function MainContent() {
    return (
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'row', gap: 3, pt: 4 }}>
            <NavMenu />
            <Box sx={{ flexGrow: 1 }}>
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
            </Box>
        </Container>
    );
}
