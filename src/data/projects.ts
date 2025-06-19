export interface Project {
  type: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    type: 'Management System For',
    title: 'Wings of Healing',
    description:
      'Comprehensive HRMS with attendance, payroll, role-based access, and dashboards.',
    image: '/src/assets/images/portfolio13.png',
  },
  {
    type: 'Online Food Delivery',
    title: 'For Ethiopian Governmental University',
    description:
      'Ongoing project creating an online food delivery system for universities.',
    image: '/src/assets/images/portfolio12.png',
  },
  {
    type: 'Official Website',
    title: 'ButaJira City Administration',
    description:
      'Official multi-language website providing city and government information.',
    image: '/src/assets/images/portfolio14.png',
    link: 'https://butajiracityadministration.com/',
  },
  {
    type: 'Learning Management System',
    title: 'INSA Cyber Talent Center, LMS',
    description:
      'Platform with progress tracking and analytics dashboards.',
    image: '/src/assets/images/Screenshot 2024-06-23 102808.png',
    link: 'https://cec.insa.gov.et/',
  },
  {
    type: 'AI Finance Tool (Demo)',
    title: 'ZamZam Bank: AI Finance Tool Collaboration',
    description:
      'Demo of AI-powered finance tool with document analysis APIs.',
    image: '/src/assets/images/ZamZamDemo2.png',
  },
  {
    type: 'ParkLink',
    title: 'ParkLink (MVP)',
    description:
      'Digital platform for park operations and asset oversight.',
    image: '/src/assets/images/ParkLinkMVP.png',
  },
  {
    type: 'Personality Testing Platform',
    title: 'INSA Personality Testing Platform',
    description:
      'Responsive frontend with secure backend APIs and monitoring.',
    image: '/src/assets/images/INSApersonalityTestingPlatformLight.png',
    link: 'https://personality.insa.gov.et/',
  },
  {
    type: 'Official Artist Website',
    title: 'ETDM: Ethiopian Dance Music',
    description:
      'Website for renowned choreographer promoting ETDM genre.',
    image: '/src/assets/images/LijTemesgenMeleseOfficial.png',
    link: 'https://etdm-lij-temesgen-personal-website-five.vercel.app',
  },
];
