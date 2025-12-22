import vasandAndCoImage from '../assets/gallery/vasand-and-co.jpeg';
import bestShopImage from '../assets/gallery/best-shop.jpeg';
import retailInterviewImage from '../assets/gallery/trends.jpeg';
import classroomPitchImage from '../assets/gallery/teach.jpeg';
import weldingLabImage from '../assets/gallery/welding.jpeg';
import skacasTeamWorkImage from '../assets/gallery/skacas.jpeg';
import hacksporaEventImage from '../assets/gallery/hackspora-event.jpeg';
import bytsImage from '../assets/gallery/byts.jpeg';
import crayondImage from '../assets/gallery/crayond.jpeg';
import speciallabImage from '../assets/gallery/special-lab.jpeg';

export const gallery = [
    {
    category: 'Personal',
    description: 'Weekends, hobbies, and the small moments that keep me balanced.',
    items: [
      {
        id: 'personal-mentor-sync',
        caption: 'Mentor sync after day one of the internship.',
        src: vasandAndCoImage,
        description: 'Debrief session with my mentor at Vasand & Co., Sathyamangalam.',
      },
      {
        id: 'personal-field-research',
        caption: 'Interviewing retail teams across Kongu Nagar.',
        src: retailInterviewImage,
        description: 'Customer research and workflow observation at Trends electronics hub.',
      },
      {
        id: 'personal-best-shop',
        caption: 'Store owner discussions captured at Best Shop.',
        src: bestShopImage,
        description: 'Retail ethnography session at Best Shop, Sathyamangalam.',
      },
      {
        id: 'personal-campus-talk',
        caption: 'Sharing knowledge learnings on campus.',
        src: classroomPitchImage,
        description: 'BIT Sathy classroom demo on UX and security heuristics.',
      },
      {
        id: 'personal-lab-build',
        caption: 'Welding practice during fabrication coursework.',
        src: weldingLabImage,
        description: 'MIG welding frames for robotics prototype in fabrication lab.',
      },
    ],
  },
  {
    category: 'Team Works',
    description: 'Quick captures from collaborative sprints, hackathons, and shared experiences.',
    items: [
      {
        id: 'teamworks-innovation-lab',
        caption: 'Innovation lab sync',
        src: skacasTeamWorkImage,
        description: 'Sprint planning session around the innovation lab workbench.',
      },
      {
        id: 'teamworks-hackathon-floor',
        caption: 'Hackathon floor review',
        src: hacksporaEventImage,
        description: 'Campus hackathon check-in with the team.',
      },
    ],
  },
  {
    category: 'Experience',
    description: 'Real-time experience and lab work building production apps and innovation prototypes.',
    items: [
      {
        id: 'byts-tech-solutions',
        caption: 'Byts Tech Solutions',
        src: bytsImage,
        description: 'Core Java development internship.',
      },
      {
        id: 'crayond-technologies',
        caption: 'Crayond Technologies',
        src: crayondImage,
        description: 'Full-stack internship with Next.js and Node.js.',
      },
      {
        id: 'special-lab-bit',
        caption: 'Special Lab BIT',
        src: speciallabImage,
        description: 'Data science research and innovation lab.',
      },
    ],
  },


];
