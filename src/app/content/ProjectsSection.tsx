// app/components/ProjectsSection.tsx

import React from 'react';
import { Typography, Box, Card, CardContent, Link } from '@mui/material';

const projects = [
    {
        name: 'Portfolio',
        description: 'En TypeScript-basert porteføljeapplikasjon som viser ferdigheter og tidligere arbeid.',
        language: 'TypeScript',
        visibility: 'Public',
        url: 'https://github.com/mohmos94/portofolio',
    },
    {
        name: 'Faktura Registering Backend',
        description: 'Backend-løsning for håndtering av fakturaregistrering.',
        language: 'Java',
        visibility: 'Public',
        url: 'https://github.com/mohmos94/faktura-registering-backend',
    },
    {
        name: 'Faktura Registrering',
        description: 'TypeScript-basert frontend-løsning for fakturaregistrering.',
        language: 'TypeScript',
        visibility: 'Public',
        url: 'https://github.com/mohmos94/faktura-registrering',
    },
    {
        name: 'Product Assortment',
        description: 'Java-basert prosjekt for administrasjon av produktutvalg.',
        language: 'Java',
        visibility: 'Public',
        url: 'https://github.com/mohmos94/product-assortment',
    },
    {
        name: 'Mocks',
        description: 'Inneholder Docker-oppsett for simulering og mocking av tjenester i utvikling.',
        language: 'Docker',
        visibility: 'Public',
        url: 'https://github.com/mohmos94/mocks',
    },
];

export default function ProjectsSection() {
    return (
        <Box id="projects" sx={{ marginBottom: '3rem' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ccd6f6', mb: 2 }}>
                Prosjekter
            </Typography>
            {projects.map((project, index) => (
                <Card key={index} sx={{ mb: 3, backgroundColor: '#112240', color: '#ccd6f6' }}>
                    <CardContent>
                        <Typography variant="h6" sx={{ color: '#64ffda' }}>
                            {project.url ? (
                                <Link href={project.url} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                                    {project.name}
                                </Link>
                            ) : (
                                project.name
                            )} - {project.visibility}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#8892b0' }}>
                            {project.language}
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#ccd6f6', mt: 1 }}>
                            {project.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
}
