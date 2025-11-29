// Updated Deadlines data for Non-EU students – all dates moved to 2026 intake
const deadlines = [
  // University Deadlines
  {
    id: 1,
    date: new Date(2026, 3, 1),      // Apr 1 → Apr 1 2026
    country: 'Netherlands',
    category: 'university',
    university: 'Erasmus',
    universityFull: 'Erasmus University Rotterdam',
    program: 'Supply Chain',
    programFull: 'MSc Supply Chain Management',
    cost: 24600,
    notes: 'Advised application deadline',
    source: 'https://www.eur.nl/en/master/supply-chain-management/application'
  },
  {
    id: 2,
    date: new Date(2026, 0, 15),     // Jan 15 → Jan 15 2026
    country: 'Netherlands',
    category: 'university',
    university: 'Amsterdam',
    universityFull: 'University of Amsterdam',
    program: 'Business',
    programFull: 'MSc Business Administration',
    cost: 21400,
    notes: 'Early decision deadline (for scholarship)',
    source: 'https://www.uva.nl/en/programmes/masters/business-administration/application-and-admission/application-and-admission.html'
  },
  {
    id: 3,
    date: new Date(2026, 3, 1),      // Apr 1 2025 → Apr 1 2026
    country: 'Netherlands',
    category: 'university',
    university: 'Delft',
    universityFull: 'Delft University of Technology',
    program: 'Logistics',
    programFull: 'MSc Transport, Infrastructure & Logistics',
    cost: 22290,
    notes: 'Advised deadline (no 2026 info available)',
    source: 'https://www.tudelft.nl/en/education/programmes/masters/til/msc-transport-infrastructure-and-logistics/admission-application-and-finance'
  },
  {
    id: 4,
    date: new Date(2026, 4, 1),      // May 1 2025 → May 1 2026
    country: 'Netherlands',
    category: 'university',
    university: 'Eindhoven',
    universityFull: 'Eindhoven University of Technology',
    program: 'Operations',
    programFull: 'MSc Operations Management & Logistics',
    cost: 21000,
    notes: 'Early application deadline (no 2026 info available)',
    source: 'https://www.tue.nl/en/education/become-a-tue-student/admission-and-enrollment/programtype/master-program/program/operations-management-and-logistics'
  },
  {
    id: 5,
    date: new Date(2026, 4, 1),
    country: 'Netherlands',
    category: 'university',
    university: 'Groningen',
    universityFull: 'University of Groningen',
    program: 'Supply Chain',
    programFull: 'MSc Supply Chain Management',
    cost: 21400,
    notes: 'Early application deadline',
    source: 'https://www.rug.nl/masters/supply-chain-management'
  },
  {
    id: 6,
    date: new Date(2026, 3, 1),
    country: 'Netherlands',
    category: 'university',
    university: 'Tilburg',
    universityFull: 'Tilburg University',
    program: 'Operations',
    programFull: 'MSc Operations Management & Logistics',
    cost: 18000,
    notes: 'Application deadline (no separate early deadline specified)',
    source: 'https://www.tilburguniversity.edu/education/masters-programs/supply-chain-management/application'
  },
  {
    id: 7,
    date: new Date(2026, 4, 15),
    country: 'Netherlands',
    category: 'university',
    university: 'Erasmus',
    universityFull: 'Erasmus University Rotterdam',
    program: 'Supply Chain',
    programFull: 'MSc Supply Chain Management',
    cost: 24600,
    notes: 'Final deadline',
    source: 'https://www.eur.nl/en/master/supply-chain-management/application'
  },
  {
    id: 8,
    date: new Date(2026, 4, 1),
    country: 'Netherlands',
    category: 'university',
    university: 'Twente',
    universityFull: 'University of Twente',
    program: 'Business',
    programFull: 'MSc Business Administration',
    cost: 17500,
    notes: 'Final deadline (no 2026 info available)',
    source: 'https://www.utwente.nl/en/education/master/programmes/business-administration/admission/'
  },
  {
    id: 9,
    date: new Date(2026, 4, 1),
    country: 'Netherlands',
    category: 'university',
    university: 'Maastricht',
    universityFull: 'Maastricht University',
    program: 'Supply Chain',
    programFull: 'MSc Global Supply Chain Management',
    cost: 18500,
    notes: 'Final deadline',
    source: 'https://www.maastrichtuniversity.nl/education/master/programmes/global-supply-chain-management-and-change/admission-requirements'
  },

  // Scholarship Deadlines – Netherlands
  {
    id: 14,
    date: new Date(2026, 0, 15),
    country: 'Netherlands',
    category: 'scholarship',
    scholarshipName: 'Amsterdam Merit Scholarship',
    description: 'For outstanding non-EU/EEA students at the University of Amsterdam.',
    notes: 'Deadline for most faculties. Check specific faculty page. (no 2026 info available)',
    source: 'https://www.uva.nl/en/education/fees-and-funding/masters-scholarships-and-loans/amsterdam-merit-scholarship/amsterdam-merit-scholarship.html'
  },
  {
    id: 16,
    date: new Date(2026, 1, 1),
    country: 'Netherlands',
    category: 'scholarship',
    scholarshipName: 'Amandus H. Lundqvist Scholarship Program',
    description: 'For excellent non-EU/EEA students at TU Eindhoven.',
    notes: 'Covers tuition fees and living costs. (no 2026 info available)',
    source: 'https://www.tue.nl/en/education/become-a-tue-student/scholarships-and-grants/amandus-h-lundqvist-scholarship-program'
  },
  {
    id: 17,
    date: new Date(2026, 1, 1),
    country: 'Netherlands',
    category: 'scholarship',
    scholarshipName: 'University of Twente Scholarship (UTS)',
    description: 'For excellent non-EU/EEA students applying for a Master’s at University of Twente.',
    notes: 'Partial tuition waiver. Amount varies. (Round 1 deadline)',
    source: 'https://www.utwente.nl/en/education/scholarship-finder/university-of-twente-scholarship/'
  },
  {
    id: 18,
    date: new Date(2026, 1, 1),
    country: 'Netherlands',
    category: 'scholarship',
    scholarshipName: 'Maastricht University NL-High Potential Scholarship',
    description: 'For high-potential non-EU/EEA students at Maastricht University.',
    notes: 'Full scholarship covering tuition and living expenses.',
    source: 'https://www.maastrichtuniversity.nl/studeren/toelating-inschrijving/financing-your-studies/scholarships/maastricht-university-nl-high'
  },
  {
    id: 10,
    date: new Date(2026, 1, 1),
    country: 'Netherlands',
    category: 'scholarship',
    scholarshipName: 'NL Scholarship (formerly Holland Scholarship)',
    description: 'For non-EEA students. Offered by many universities.',
    notes: 'Deadline at most universities. Some may have a May 1 deadline.',
    source: 'https://www.studyinnl.org/finances/nl-scholarship'
  },
  {
    id: 13,
    date: new Date(2026, 1, 17),
    country: 'Netherlands',
    category: 'scholarship',
    scholarshipName: 'LPDP Scholarship (Batch 1)',
    description: 'Indonesian government scholarship for postgraduate studies abroad.',
    notes: 'Registration for the first batch. Check official site for details. (no 2026 info available)',
    source: 'https://lpdp.kemenkeu.go.id/'
  },
  {
    id: 11,
    date: new Date(2026, 3, 1),
    country: 'Netherlands',
    category: 'scholarship',
    scholarshipName: 'Orange Tulip Scholarship (Indonesia)',
    description: 'For Indonesian students applying to participating Dutch universities.',
    notes: 'Deadline for Neso Indonesia. Check specific university for variations. (no 2026 info available)',
    source: 'https://www.nesoindonesia.or.id/beasiswa/orange-tulip-scholarship'
  },
  {
    id: 12,
    date: new Date(2026, 4, 1),
    country: 'Netherlands',
    category: 'scholarship',
    scholarshipName: 'NL Scholarship (Alternative Deadline)',
    description: 'For non-EEA students. Offered by some universities with a later deadline.',
    notes: 'Alternative deadline for the NL Scholarship. Check your chosen university.',
    source: 'https://www.studyinnl.org/finances/nl-scholarship'
  },

  // German University Deadlines
  {
    id: 19,
    date: new Date(2026, 6, 15),
    country: 'Germany',
    category: 'university',
    university: 'TU Munich',
    universityFull: 'Technical University of Munich',
    program: 'Management',
    programFull: 'Master in Management',
    cost: 6000,
    notes: 'General application deadline for non-EU students for the winter semester. (no 2026 info available)',
    source: 'https://www.tum.de/en/studies/application/master'
  },
  {
    id: 20,
    date: new Date(2026, 6, 15),
    country: 'Germany',
    category: 'university',
    university: 'KLU',
    universityFull: 'Kühne Logistics University',
    program: 'Supply Chain',
    programFull: 'MSc in Global Logistics and Supply Chain Management',
    cost: 16400,
    notes: 'Application deadline for non-EU students for the winter semester. (no 2026 info available)',
    source: 'https://www.the-klu.org/master/admissions/'
  },
  {
    id: 21,
    date: new Date(2026, 4, 31),   // May 31 2025 → May 31 2026
    country: 'Germany',
    category: 'university',
    university: 'Mannheim',
    universityFull: 'Mannheim Business School',
    program: 'Business',
    programFull: 'Mannheim Master in Management',
    cost: 3000,
    notes: 'Final application deadline for non-EU students. (no 2026 info available)',
    source: 'https://www.mannheim-business-school.com/en/masters/mannheim-master-in-management/admissions'
  },

  // German Scholarship Deadlines
  {
    id: 22,
    date: new Date(2026, 9, 31),
    country: 'Germany',
    category: 'scholarship',
    scholarshipName: 'DAAD EPOS Scholarship',
    description: 'For students from developing countries pursuing development-related postgraduate courses.',
    notes: 'Deadline varies significantly by program. Check specific course details. (no 2026 info available)',
    source: 'https://www.daad.de/en/studying-in-germany/scholarships/daad-scholarships/'
  },

  // The rest of the German entries (already mostly 2026) – kept exactly as they were but confirmed year 2026
  { id: 23, date: new Date(2026, 0, 15), country: 'Germany', category: 'university', university: 'TUM', universityFull: 'Technical University of Munich', program: 'All Programs', programFull: 'All Master\'s Programs', cost: 4000, notes: 'Deadline for open-admission programs for Summer 2026.', source: 'https://www.tum.de/en/studies/application/application-info-portal/dates-periods-and-deadlines' },
  { id: 24, date: new Date(2026, 4, 31), country: 'Germany', category: 'university', university: 'TUM', universityFull: 'Technical University of Munich', program: 'All Programs', programFull: 'All Master\'s Programs', cost: 4000, notes: 'Deadline for open-admission programs for Winter 2026/27.', source: 'https://www.tum.de/en/studies/application/application-info-portal/dates-periods-and-deadlines' },
  { id: 25, date: new Date(2026, 5, 30), country: 'Germany', category: 'scholarship', scholarshipName: 'TUM Non-EU Fee Waiver', description: 'Waiver of tuition fees for non-EU students at TUM.', notes: 'Merit-based waiver of €2,000-€6,000 per semester.', source: 'https://www.tum.de/en/studies/fees/tuition/scholarships-and-waivers' },
  { id: 26, date: new Date(2026, 6, 15), country: 'Germany', category: 'university', university: 'LMU', universityFull: 'Ludwig-Maximilians-Universität München', program: 'All Programs', programFull: 'All Master\'s Programs', cost: 0, notes: 'Application deadline for Winter 2026/27 via MoveIN portal.', source: 'https://www.lmu.de/en/study/degree-students/dates-and-deadlines/index.html' },
  { id: 27, date: new Date(2026, 1, 28), country: 'Germany', category: 'scholarship', scholarshipName: 'Bavaria Study Scholarship', description: 'For students at LMU, based on merit and need.', notes: 'Provides €800-€1,000 per month. Apply per semester.', source: 'https://www.lmu.de/en/workspace-for-students/student-support-services/finance-your-studies/scholarships/scholarships-for-international-students/' },
  { id: 28, date: new Date(2026, 4, 1), country: 'Germany', category: 'university', university: 'Heidelberg', universityFull: 'Heidelberg University', program: 'All Programs', programFull: 'All Master\'s Programs', cost: 3000, notes: 'Application deadline for restricted-admission programs for Summer 2026.', source: 'https://www.uni-heidelberg.de/en/study/management-of-studies/key-dates-deadlines' },
  { id: 29, date: new Date(2026, 2, 15), country: 'Germany', category: 'scholarship', scholarshipName: 'Robert and Christine Danziger Scholarship', description: 'For African students in specific fields at Heidelberg.', notes: 'Provides €500-€1,000 per month.', source: 'https://www.uni-heidelberg.de/en/friends-supporters/robert-and-christine-danziger-scholarship' },
  { id: 30, date: new Date(2026, 0, 15), country: 'Germany', category: 'university', university: 'FU Berlin', universityFull: 'Freie Universität Berlin', program: 'Business', programFull: 'Restricted-Admission Business Programs', cost: 0, notes: 'Deadline for restricted programs like business for Summer 2026.', source: 'https://www.fu-berlin.de/en/studium/bewerbung/bewerbungsfristen/index.html' },
  { id: 31, date: new Date(2026, 1, 27), country: 'Germany', category: 'scholarship', scholarshipName: 'STIBET I (DAAD)', description: 'For international students at Freie Universität Berlin.', notes: 'Provides €861/month + access to support programs.', source: 'https://www.fu-berlin.de/en/sites/studienberatung/international/daad-stipendien.html' },
  { id: 32, date: new Date(2026, 0, 15), country: 'Germany', category: 'university', university: 'RWTH Aachen', universityFull: 'RWTH Aachen University', program: 'All Programs', programFull: 'All Master\'s Programs', cost: 0, notes: 'Deadline for open-admission programs for Summer 2026.', source: 'https://www.rwth-aachen.de/cms/root/studium/vor-dem-studium/bewerbung-um-einen-studienplatz/master-bewerbung/~dqml/bewerbung-master-internationale/?lidx=1' },
  { id: 33, date: new Date(2026, 2, 1), country: 'Germany', category: 'scholarship', scholarshipName: 'BEIS Scholarship', description: 'For particularly engaged international students at RWTH Aachen.', notes: 'Provides €500 per month.', source: 'https://www.rwth-aachen.de/cms/root/studium/im-studium/stipendien-foerderung/~bdlg/stipendium-fuer-besonders-engagierte-int/?lidx=1' },
  { id: 34, date: new Date(2026, 10, 30), country: 'Germany', category: 'university', university: 'HU Berlin', universityFull: 'Humboldt-Universität zu Berlin', program: 'All Programs', programFull: 'All Master\'s Programs', cost: 0, notes: 'Application deadline for most programs for Summer 2026.', source: 'https://www.hu-berlin.de/en/studies/admission/requirements_postgraduate_programmes/deadlines_and_overview' },
  { id: 35, date: new Date(2026, 7, 31), country: 'Germany', category: 'scholarship', scholarshipName: 'Deutschlandstipendium', description: 'Merit-based scholarship at HU Berlin.', notes: 'Provides €300 per month.', source: 'https://deutschlandstipendium.hu-berlin.de/en' },
  { id: 36, date: new Date(2026, 0, 15), country: 'Germany', category: 'university', university: 'TU Berlin', universityFull: 'Technical University of Berlin', program: 'All Programs', programFull: 'All Master\'s Programs', cost: 0, notes: 'Deadline for open-admission programs for Winter 2026/27.', source: 'https://www.tu.berlin/en/studying/applying-and-enrolling/dates-deadlines-for-application-and-enrollment-at-tu-berlin' },
  { id: 37, date: new Date(2026, 6, 15), country: 'Germany', category: 'university', university: 'Freiburg', universityFull: 'University of Freiburg', program: 'All Programs', programFull: 'All Master\'s Programs', cost: 3000, notes: 'Application deadline for restricted-admission programs for Winter 2026/27.', source: 'https://www.studium.uni-freiburg.de/en/dates-deadlines-events/deadlines' },
  { id: 38, date: new Date(2026, 9, 15), country: 'Germany', category: 'scholarship', scholarshipName: 'DAAD EPOS MEG', description: 'For students in the Environmental Governance program at Freiburg.', notes: 'Full scholarship including tuition waiver.', source: 'https://www.meg.uni-freiburg.de/admissions/Scholarships/daad%20scholarship' }
];