// app/components/ExperienceSection.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const experiences = [
    {
        company: 'Visma Norge',
        role: 'Fullstack utvikler',
        employmentType: 'Heltid',
        period: 'apr. 2024 - Nå (7 måneder)',
        location: 'Oslo, Norge · Hybrid',
        description: 'Utvikling av ERP-løsninger for økonomi.',
        skills: [
            'Micronaut',
            'Køsystemer'
        ]
    },
    {
        company: 'Experis Norge / Sparebank 1',
        role: 'Full Stack-utvikler',
        employmentType: 'Heltid',
        period: 'jan. 2023 - apr. 2024 (1 år 4 måneder)',
        location: 'Oslo, Norge',
        description: `
      Backend-utvikler med fokus på Single Sign-On (SSO) for Sparebank 1, med erfaring innen kundeinnloggingssystemer og integrasjon av interne systemer.`,
        skills: [
            'Single Sign-On (SSO)',
            'Docker',
            'Playwright',
            'Cypress',
            'Spring Boot'
        ],
    },
    {
        company: 'OBOS',
        role: 'Saksbehandler vikariat',
        employmentType: 'Heltid',
        period: 'des. 2021 - jan. 2023 (1 år 2 måneder)',
        location: 'Oslo, Norge',
        description: `
      Kvalitetssikring av boliginformasjon til meglere og boligselgere. Saksbehandling av eierskifte, bruksoverlating og utleieboliger.
      Ansvarlig for opplæring av nytt system og prosjektmedarbeider for nytt fagsystem.`,
    },
    {
        company: 'OBOS',
        role: 'Fakturamedarbeider sommerjobb',
        employmentType: 'Deltid',
        period: 'jun. 2021 - aug. 2021 (3 måneder)',
        location: 'Oslo, Norge',
        description: `
      Ansvar for verifisering av innkommende bilag og behandling av betalingspåminnelser for boligbyggelag.`,
    },
    {
        company: 'Høgskolen i Østfold (HiØ)',
        role: 'Studentassistent i webutvikling',
        employmentType: 'Heltid',
        period: 'aug. 2020 - des. 2020 (5 måneder)',
        location: 'Halden',
        description: `
      Veiledning av studenter i webutvikling (HTML og CSS). Samarbeid med foreleser for tilbakemeldinger og vurderinger.`,
    },
    {
        company: '7-Eleven Vågsalmenning',
        role: 'Butikkmedarbeider',
        employmentType: 'Deltid',
        period: 'jun. 2016 - aug. 2019 (3 år 3 måneder)',
        location: 'Bergen, Norge',
        description: `
      Opplæring av nyansatte og flere ganger kåret som beste medarbeider innen salg og service.`,
    },
];

export default function ExperienceSection() {
    return (
        <Box id="experience" sx={{ marginBottom: '3rem' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ccd6f6', mb: 2 }}>
                Erfaring
            </Typography>
            {experiences.map((exp, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ color: '#64ffda' }}>{exp.role} - {exp.company}</Typography>
                    <Typography variant="body2" sx={{ color: '#8892b0', fontStyle: 'italic' }}>{exp.employmentType} · {exp.period}</Typography>
                    <Typography variant="body2" sx={{ color: '#8892b0' }}>{exp.location}</Typography>
                    <Typography variant="body1" sx={{ color: '#ccd6f6', mt: 1 }}>{exp.description}</Typography>
                    {exp.skills && (
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="body2" sx={{ color: '#8892b0', fontWeight: 'bold' }}>Teknologier og kjernekompetanser:</Typography>
                            <ul>
                                {exp.skills.map((skill, i) => (
                                    <li key={i}>
                                        <Typography variant="body2" sx={{ color: '#ccd6f6' }}>{skill}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
}
