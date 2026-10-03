export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
  icon: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Traversing With Time',
    description:
      'Personal travel stories and trekking guides from Nepal, Tanzania, and beyond. Read about my Everest Base Camp trek in the Himalayas, climbing Mount Kilimanjaro, high-altitude hiking tips, and cultural experiences from concerts to mountain villages across continents.',
    tags: ['Travel', 'Nepal', 'Himalayas', 'Trekking'],
    url: 'https://nepalboy.github.io/Travelnew/#/',
    icon: '🌍',
    image:
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcOdgrNratZDgXqn6MfCsMopcCNVsJOISnfijo7MV1IMK6OFXACj32egHGEjj9xZbeKN0soMPUliFG9n47Q733WHO-55ARytS0rJ7HiHwyo50QkUXVrVanNl90Uxp81FyG8KK3LbA?key=RG9KWpZ8wPjWWIcXoGdZIEc4',
  },
  {
    title: 'MedicSec',
    description:
      'A practical platform for building safe and secure medical devices. I write about medical device cybersecurity, product security, functional safety, risk management, and compliance with standards like IEC 62304 and ISO 14971 — integrating the processes, people, and technologies that protect patients.',
    tags: ['Medical Devices', 'Cybersecurity', 'IEC 62304', 'ISO 14971'],
    url: 'https://www.medicsec.com/',
    icon: '🔒',
    image: '/medicsec-preview.png',
  },
  {
    title: 'Picture Speaks',
    description:
      'A curated gallery of 40+ photographs from my travels — from the peaks of Kilimanjaro to the streets of Kathmandu. Browse travel photography featuring Himalayan landscapes, Nepali culture and food, wildlife, and adventure sports, each image with the story behind it.',
    tags: ['Photography', 'Himalayas', 'Nepal', 'Travel'],
    url: '#/gallery',
    icon: '📸',
    image: '/images/Nepal_Trolleybus_Tripureswore_1985.jpg',
  },
  {
    title: 'San Diego Soccer',
    description:
      "Covering San Diego's soccer culture: San Diego FC in Major League Soccer, the vibrant youth soccer scene, community tournaments, and matchday experiences around America's Finest City. Schedules, stories, and snapshots from the stands and the sidelines.",
    tags: ['Soccer', 'San Diego FC', 'MLS', 'San Diego'],
    url: 'https://soccer.nepaliboy.com/',
    icon: '⚽',
    image: '/images/soccer-preview.png',
  },
  {
    title: 'The Hope',
    description:
      'The Hope: A Memoir from the Foothills of the Himalayas — my book about growing up in Nepal during wartime, living with bipolar disorder, pursuing education against the odds, immigrating to the United States, and holding on to hope through it all. Available in paperback and ebook.',
    tags: ['Book', 'Memoir', 'Nepal', 'Immigration'],
    url: 'https://www.amazon.com/Hope-Foothills-Himalayas-education-immigration/dp/1801287775',
    icon: '📖',
    image: '/book-cover.jpg',
  },
  {
    title: 'My Muse Everest',
    description:
      'Meet Everest, my AI assistant built with Muse. I log a daily journal of everything we build together — websites, tools, automation, and creative projects — part experiment, part field notes on living and working alongside artificial intelligence.',
    tags: ['AI', 'Muse', 'Assistant', 'Projects'],
    url: 'https://ilovemuse.blog/',
    icon: '🏔️',
    image: '/everest-avatar.jpg',
  },
  {
    title: 'I Love Immigration',
    description:
      'Practical immigration resources: F-1 student visa guides, work visa news, legal migration explainers, and real stories from people who made the journey. Written from my own experience immigrating from Nepal to the United States, plus curated updates on immigration policy.',
    tags: ['Immigration', 'F-1 Visa', 'Student Visas', 'Legal Migration'],
    url: 'https://iloveimmigration.blog/',
    icon: '🛂',
    image: 'https://iloveimmigration.blog/og-image.png',
  },
  {
    title: 'Meet Me and Muse Everest at LinkedIn',
    description:
      'Follow my professional journey in medical device cybersecurity and safety, plus daily notes from my AI building experiments. I write about product security, healthcare technology, and the intersection of engineering and real life.',
    tags: ['LinkedIn', 'Cybersecurity', 'Connect'],
    url: 'https://www.linkedin.com/in/ravidhungel/',
    icon: '💼',
    image: '/profile-photo.jpg',
  },
];

export interface Story {
  title: string;
  description: string;
  url: string;
}

export const latestStories: Story[] = [
  {
    title: 'The Most Beautiful Scenic Hike of San Diego: Torrey Pines',
    description:
      'Torrey Pines State Natural Reserve has some of the most dramatic coastal scenery in Southern California — sandstone cliffs, rare Torrey pine trees, and sweeping views of the Pacific. My photo walk through the reserve, with trail notes and the best overlooks.',
    url: 'https://nepalboy.github.io/Travelnew/#/',
  },
  {
    title: 'Exploring South and North Fortuna: Jewels of Mission Trails',
    description:
      "Mission Trails Regional Park is San Diego's backyard wilderness, and the twin peaks of South and North Fortuna are its best half-day hike. Trailhead directions, elevation profiles, and photos from a weekend traverse of both summits.",
    url: 'https://nepalboy.github.io/Travelnew/#/',
  },
  {
    title: 'To Everest Base Camp and Back',
    description:
      "The trek to Everest Base Camp (5,364m) is the hardest and most rewarding thing I've done on foot: Lukla's mountain airstrip, Namche Bazaar's teahouses, and sunrise over the Khumbu Icefall. My full day-by-day account, with packing lessons for high-altitude trekking in Nepal.",
    url: 'https://nepalboy.github.io/Travelnew/#/',
  },
];
