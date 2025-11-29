// Updated Deadlines data for Non-EU students (with verified/advised deadlines)
const deadlines = [
    // University Deadlines
    {
        id: 1,
        date: new Date(2025, 3, 1),
        category: 'university',
        university: 'Erasmus',
        universityFull: 'Erasmus University Rotterdam',
        program: 'Supply Chain',
        programFull: 'MSc Supply Chain Management',
        notes: 'Advised application deadline',
        source: 'https://www.eur.nl/en/master/supply-chain-management/application'
    },
    {
        id: 2,
        date: new Date(2025, 0, 15),
        category: 'university',
        university: 'Amsterdam',
        universityFull: 'University of Amsterdam',
        program: 'Business',
        programFull: 'MSc Business Administration',
        notes: 'Early decision deadline',
        source: 'https://www.uva.nl/en/programmes/masters/business-administration/application-and-admission/application-and-admission.html'
    },
    {
        id: 3,
        date: new Date(2025, 3, 1),
        category: 'university',
        university: 'Delft',
        universityFull: 'Delft University of Technology',
        program: 'Logistics',
        programFull: 'MSc Transport, Infrastructure & Logistics',
        notes: 'Advised deadline',
        source: 'https://www.tudelft.nl/en/education/programmes/masters/til/msc-transport-infrastructure-and-logistics/admission-application-and-finance'
    },
    {
        id: 4,
        date: new Date(2025, 4, 1),
        category: 'university',
        university: 'Eindhoven',
        universityFull: 'Eindhoven University of Technology',
        program: 'Operations',
        programFull: 'MSc Operations Management & Logistics',
        notes: 'Early application deadline',
        source: 'https://www.tue.nl/en/education/become-a-tue-student/admission-and-enrollment/programtype/master-program/program/operations-management-and-logistics'
    },
    {
        id: 5,
        date: new Date(2025, 4, 1),
        category: 'university',
        university: 'Groningen',
        universityFull: 'University of Groningen',
        program: 'Supply Chain',
        programFull: 'MSc Supply Chain Management',
        notes: 'Early application deadline',
        source: 'https://www.rug.nl/masters/supply-chain-management'
    },
    {
        id: 6,
        date: new Date(2025, 3, 1),
        category: 'university',
        university: 'Tilburg',
        universityFull: 'Tilburg University',
        program: 'Operations',
        programFull: 'MSc Operations Management & Logistics',
        notes: 'Early application deadline',
        source: 'https://www.tilburguniversity.edu/education/masters-programs/supply-chain-management/application'
    },
    {
        id: 7,
        date: new Date(2025, 4, 15),
        category: 'university',
        university: 'Erasmus',
        universityFull: 'Erasmus University Rotterdam',
        program: 'Supply Chain',
        programFull: 'MSc Supply Chain Management',
        notes: 'Final deadline',
        source: 'https://www.eur.nl/en/master/supply-chain-management/application'
    },
    {
        id: 8,
        date: new Date(2025, 4, 1),
        category: 'university',
        university: 'Twente',
        universityFull: 'University of Twente',
        program: 'Business',
        programFull: 'MSc Business Administration',
        notes: 'Final deadline',
        source: 'https://www.utwente.nl/en/education/master/programmes/business-administration/admission/'
    },
    {
        id: 9,
        date: new Date(2025, 4, 1),
        category: 'university',
        university: 'Maastricht',
        universityFull: 'Maastricht University',
        program: 'Supply Chain',
        programFull: 'MSc Global Supply Chain Management',
        notes: 'Final deadline',
        source: 'https://www.maastrichtuniversity.nl/education/master/programmes/global-supply-chain-management-and-change/admission-requirements'
    },

    // Scholarship Deadlines
    {
        id: 14,
        date: new Date(2025, 0, 15),
        category: 'scholarship',
        scholarshipName: 'Amsterdam Merit Scholarship',
        description: 'For outstanding non-EU/EEA students at the University of Amsterdam.',
        notes: 'Deadline for most faculties. Check specific faculty page.',
        source: 'https://www.uva.nl/en/education/fees-and-funding/masters-scholarships-and-loans/amsterdam-merit-scholarship/amsterdam-merit-scholarship.html'
    },
    // {
    //     id: 15,
    //     date: new Date(2024, 11, 1),
    //     category: 'scholarship',
    //     scholarshipName: 'Justus & Louise van Effen Excellence Scholarship',
    //     description: 'For excellent international MSc students at TU Delft.',
    //     notes: 'Full scholarship covering tuition and living expenses.',
    //     source: 'https://www.tudelft.nl/en/education/practical-matters/scholarships/justus-louise-van-effen-excellence-scholarships'
    // },
    {
        id: 16,
        date: new Date(2025, 1, 1),
        category: 'scholarship',
        scholarshipName: 'Amandus H. Lundqvist Scholarship Program',
        description: 'For excellent non-EU/EEA students at TU Eindhoven.',
        notes: 'Covers tuition fees and living costs.',
        source: 'https://www.tue.nl/en/education/become-a-tue-student/scholarships-and-grants/amandus-h-lundqvist-scholarship-program'
    },
    {
        id: 17,
        date: new Date(2025, 1, 1),
        category: 'scholarship',
        scholarshipName: 'University of Twente Scholarship (UTS)',
        description: 'For excellent non-EU/EEA students applying for a Master’s at University of Twente.',
        notes: 'Partial tuition waiver. Amount varies.',
        source: 'https://www.utwente.nl/en/education/scholarship-finder/university-of-twente-scholarship/'
    },
    {
        id: 18,
        date: new Date(2025, 1, 1),
        category: 'scholarship',
        scholarshipName: 'Maastricht University NL-High Potential Scholarship',
        description: 'For high-potential non-EU/EEA students at Maastricht University.',
        notes: 'Full scholarship covering tuition and living expenses.',
        source: 'https://www.maastrichtuniversity.nl/studeren/toelating-inschrijving/financing-your-studies/scholarships/maastricht-university-nl-high'
    },
    {
        id: 10,
        date: new Date(2025, 1, 1),
        category: 'scholarship',
        scholarshipName: 'NL Scholarship (formerly Holland Scholarship)',
        description: 'For non-EEA students. Offered by many universities.',
        notes: 'Deadline at most universities. Some may have a May 1 deadline.',
        source: 'https://www.studyinnl.org/finances/nl-scholarship'
    },
    {
        id: 13,
        date: new Date(2025, 1, 17),
        category: 'scholarship',
        scholarshipName: 'LPDP Scholarship (Batch 1)',
        description: 'Indonesian government scholarship for postgraduate studies abroad.',
        notes: 'Registration for the first batch. Check official site for details.',
        source: 'https://lpdp.kemenkeu.go.id/'
    },
    {
        id: 11,
        date: new Date(2025, 3, 1),
        category: 'scholarship',
        scholarshipName: 'Orange Tulip Scholarship (Indonesia)',
        description: 'For Indonesian students applying to participating Dutch universities.',
        notes: 'Deadline for Neso Indonesia. Check specific university for variations.',
        source: 'https://www.nesoindonesia.or.id/beasiswa/orange-tulip-scholarship'
    },
    {
        id: 12,
        date: new Date(2025, 4, 1),
        category: 'scholarship',
        scholarshipName: 'NL Scholarship (Alternative Deadline)',
        description: 'For non-EEA students. Offered by some universities with a later deadline.',
        notes: 'Alternative deadline for the NL Scholarship. Check your chosen university.',
        source: 'https://www.studyinnl.org/finances/nl-scholarship'
    }
];