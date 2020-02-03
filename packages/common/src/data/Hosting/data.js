import {
  IconOne,
  IconTwo,
  IconThree,
  IconFour,
  IconFive,
  IconSix,
  AuthorOne,
  AuthorTwo,
  AuthorThree,
} from './images';

// Feature Section Content
export const FEATURES_DATA = [
  {
    title: 'Customer Targeting',
    description:
      'Isolate specific audiences using search factors across intent, context and granular demographics. Get specific on what consumers need in real time',
    icon: 'flaticon-objective violate',
    animation: true,
  },
  {
    title: 'Process Selection',
    description:
      'Utilise a wide range of services to maximise visibility from your customers. Leverage paid search, remarketing, display advertising and more.',
    icon: 'flaticon-strategy yellow',
    animation: true,
  },
  {
    title: 'Detailed Reporting',
    description:
      'Ensure your campaigns are bringing benefit. Analyse clicks, impressions, conversion costs and more to influence further optimisation.',
    icon: 'flaticon-conversation green',
    animation: true,
  },
];

// FAQ Section Content
export const FAQ_DATA = [
  {
    expend: true,
    title: `I can't afford it`,
    description:
      'Not utilising online marketing can be costly. We will first determine a cost of conversion for each lead, then attempt to lower it so that your budget is always working for you.',
  },
  {
    title: `I don't see its use`,
    description:
      'It allows you to predictably increase leads. It gives you control of those leads to suit objectives.',
  },
  {
    title: 'I already have something similar',
    description:
      'Is it effective and cost-efficient? Have you seen an increase in sales? Do you have full visibility? Is it an enjoyable service?',
  },
  {
    title: 'I tried this before and it never worked',
    description:
      `Perhaps campaigns weren't effectively designed or the budget wasn't directed well enough. We can work together to deliver something more aligned to the business goals.`,
  },
];

// Service Section Content
export const SERVICES_DATA = [
  {
    title: 'Grow leads',
    description:
      'Keep increasing the number of visitors for higher conversions',
    icon: `${IconOne}`,
  },
  {
    title: 'Track and optimise traffic',
    description:
      'Get detailed statistics on comster traffic to optimise',
    icon: `${IconTwo}`,
  },
  {
    title: 'Expand customer base',
    description:
      'Tap into even more audiences using various services',
    icon: `${IconThree}`,
  },
  {
    title: 'Controlled budget',
    description:
      'Track costs of individual clicks to never exceed your budget',
    icon: `${IconFour}`,
  },
  {
    title: 'Increase revenue',
    description:
      'Boost your business value from higher conversions and lower costs',
    icon: `${IconFive}`,
  },
  {
    title: '24/7 Online Support',
    description:
      'A Dedicated support team is always ready to provide best support ',
    icon: `${IconSix}`,
  },
];

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '70',
  },
  {
    label: 'About PPC',
    path: '#about_section',
    offset: '70',
  },
  {
    label: 'Service',
    path: '#service_section',
    offset: '70',
  },
  {
    label: 'Testimonials',
    path: '#testimonial_section',
    offset: '70',
  },
  {
    label: 'FAQ',
    path: '#faq_section',
    offset: '70',
  },
  {
    label: 'Make Enquiry',
    path: '#contact_section',
    offset: '70',
    button: true,
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Account',
    description: 'For Small teams or group who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'CREATE FREE ACCOUNT',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Mediums teams or group who need to build website ',
    price: '$9.87',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$12.98',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Account',
    description: 'For a single client or team who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'CREATE FREE ACCOUNT',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small teams or group who need to build website ',
    price: '$6.00',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Unlimited secure storage',
      },
      {
        content: '2,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: '24/7 phone support',
      },
      {
        content: '50+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$9.99',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '3,000s of Templates Ready',
      },
      {
        content: 'Advanced branding',
      },
      {
        content: 'Knowledge base support',
      },
      {
        content: '80+ Webmaster Tools',
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    review:
      'Best working experience  with this amazing team & in future, we want to work together',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: `${AuthorOne}`,
  },
  {
    review:
      'Impressed with master class support of the team and really look forward for the future.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: `${AuthorTwo}`,
  },
  {
    review:
      'I have bought more than 10 themes on ThemeForest, and this is the first one I review.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.',
    avatar: `${AuthorThree}`,
  },
];

export const DOMAIN_NAMES = [
  {
    label: '.com',
    value: 'com',
  },
  {
    label: '.net',
    value: 'net',
  },
  {
    label: '.org',
    value: 'org',
  },
  {
    label: '.co',
    value: 'co',
  },
  {
    label: '.edu',
    value: 'edu',
  },
  {
    label: '.me',
    value: 'me',
  },
];

export const DOMAIN_PRICE = [
  {
    content: '.com $9.26',
  },
  {
    content: '.sg $7.91',
  },
  {
    content: '.space $12.54',
  },
  {
    content: '.info $9.13',
  },
  {
    content: '& much more',
    url: '#',
  },
];
