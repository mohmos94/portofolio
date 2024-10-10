// app/components/EducationSection.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const education = [
    {
        institution: 'OsloMet – storbyuniversitetet',
        degree: "Bachelor's degree, Informasjonsteknologi",
        period: 'aug. 2022 - jun. 2023',
        location: 'Oslo, Norge',
        description: `
      Fullførte spesialisering innen informasjonsteknologi, med fokus på moderne web- og programvareutvikling. Prosjekter inkluderte 
      utvikling av applikasjoner med bruk av moderne rammeverk og verktøy.`,
    },
    {
        institution: 'Høgskolen i Østfold (HiØ)',
        degree: "Bachelor's degree, Informatikk",
        period: '2019 - 2022',
        location: 'Halden, Norge',
        description: `
      Gjennomførte en bachelor i informatikk med hovedvekt på programmering, databaser, og systemutvikling. Veiledet også studenter som studentassistent 
      i webutvikling, og jobbet med HTML og CSS i praktiske prosjekter.`,
    },
    {
        institution: 'Handelshøyskolen BI',
        degree: "Bachelor's degree, Økonomi",
        period: 'aug. 2014 - jun. 2018',
        location: 'Oslo, Norge',
        description: `
      Bachelor i økonomi med emner innen bedriftsøkonomi, finans, og regnskap. Utviklet en solid forståelse for økonomiske prinsipper 
      og analyser, som har vist seg verdifullt i teknologirelaterte roller.`,
    },
];

export default function EducationSection() {
    return (
        <Box id="education" sx={{ marginBottom: '3rem' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ccd6f6', mb: 2 }}>
                Utdanning
            </Typography>
            {education.map((edu, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ color: '#64ffda' }}>{edu.degree} - {edu.institution}</Typography>
                    <Typography variant="body2" sx={{ color: '#8892b0', fontStyle: 'italic' }}>{edu.period}</Typography>
                    <Typography variant="body2" sx={{ color: '#8892b0' }}>{edu.location}</Typography>
                    <Typography variant="body1" sx={{ color: '#ccd6f6', mt: 1 }}>{edu.description}</Typography>
                </Box>
            ))}
        </Box>
    );
}
