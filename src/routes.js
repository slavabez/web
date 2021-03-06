/* Pi-hole: A black hole for Internet advertisements
*  (c) 2017 Pi-hole, LLC (https://pi-hole.net)
*  Network-wide ad blocking via your own hardware.
*
*  Web Interface
*  Navigation information
*
*  This file is copyright under the latest version of the EUPL.
*  Please see LICENSE file for your rights under this license. */

export const routes = t => ({
  '/dashboard': t('Dashboard'),
  '/query-log': t('Query Log'),
  '/whitelist': t('Whitelist'),
  '/blacklist/exact': `${t('Blacklist')} (${t('Exact')})`,
  '/blacklist/regex': `${t('Blacklist')} (${t('Regex')})`,
  '/settings/versions': t('Versions'),
  '/settings/networking': t('Networking'),
  '/login': t('Login'),
  '/logout': t('Logout')
});

export const nav = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'fa fa-dashboard',
    auth: false
  },
  {
    name: 'Query Log',
    url: '/query-log',
    icon: 'fa fa-database',
    auth: true
  },
  {
    name: 'Whitelist',
    url: '/whitelist',
    icon: 'fa fa-check-circle-o',
    auth: false
  },
  {
    name: 'Blacklist',
    url: "/blacklist",
    icon: 'fa fa-ban',
    auth: false,
    children: [
      {
        name: 'Exact',
        url: '/blacklist/exact',
        icon: 'fa fa-ban',
        auth: false
      },
      {
        name: 'Regex',
        url: '/blacklist/regex',
        icon: 'fa fa-ban',
        auth: false
      }
    ]
  },
  {
    name: 'Settings',
    url: "/settings",
    icon: 'fa fa-wrench',
    auth: true,
    children: [
      { 
        name: 'Versions',
        url: '/settings/versions',
        icon: 'fa fa-download',
        auth: true
      },
      {
        name: 'Networking',
        url: '/settings/networking',
        icon: 'fa fa-sitemap',
        auth: true,
      }
    ]
  },
  {
    name: 'Login',
    url: '/login',
    icon: 'fa fa-user',
    auth: false,
    authStrict: true
  },
  {
    name: 'Logout',
    url: '/logout',
    icon: 'fa fa-user-times',
    auth: true,
    authStrict: true
  }
];
