import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
/*  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },*/
  {
    title: 'Supervisor',
    icon: 'nb-tables',
    children: [
      {
        title: 'Analytics',
        // icon: 'nb-home',
        home: true,
        link: '/pages/dashboard',
      },
      {
        title: 'Matching Spot',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Participants',
        link: '/pages/tables/all-users',
      },
      {
        title: 'Matching',
        link: '/pages/tables/matching',
      },
    ],
  },
  {
    title: 'Mentor',
    icon: 'nb-tables',
    children: [
      {
        title: 'Add Skill',
        // icon: 'nb-home',
        link: '/pages/tables/mentor-skill',
      },
/*      {
        title: 'Participants',
        link: '/pages/tables/all-users',
      },*/
    ],
  },
  {
    title: 'Student',
    icon: 'nb-tables',
    children: [

      {
        title: 'Pick a skill',
        // icon: 'nb-home',
        link: '/pages/tables/all-students',
      },
      {
        title: 'Registration status',
        // icon: 'nb-home',
        link: '/pages/tables/student-status',
      },
      /*      {
							title: 'Participants',
							link: '/pages/tables/all-users',
						},*/
    ],
  },

];
