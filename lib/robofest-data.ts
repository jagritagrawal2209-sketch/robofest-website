export const FEST = {
  name: "ROBOFEST'27",
  parentFest: "ANANTYA'27",
  venue: 'NIT Raipur, Chhattisgarh',
  dateLabel: '20 — 21 March 2027',
  startsAt: '2027-03-20T10:00:00+05:30',
  registerUrl: 'https://robotix.nitrr.ac.in/robofest',
  clubUrl: 'https://robotix.nitrr.ac.in',
}

export type EventSpec = { label: string; value: string }

export type FestEvent = {
  id: string
  code: string
  name: string
  category: string
  tagline: string
  day: 1 | 2
  time: string
  description: string
  prize: string
  specs: EventSpec[]
  image?: string
  flagship?: boolean
}

export const EVENTS: FestEvent[] = [
  {
    id: 'robothon',
    code: 'RT-01',
    name: 'Robothon',
    category: 'Flagship Hackathon',
    tagline: 'Build the future in 24 hours',
    day: 1,
    time: '10:00 AM onwards · 24 hrs',
    description:
      'A 24-hour simulation-based hackathon on GPS-denied drones, swarm robotics, underwater vehicles, nanobots and six-legged rovers. Bring a team, a laptop and zero sleep.',
    prize: '₹35,000',
    specs: [
      { label: 'Duration', value: '24 hours' },
      { label: 'Team', value: '2 — 4' },
      { label: 'Format', value: 'Simulation' },
    ],
    image: '/images/robothon.png',
    flagship: true,
  },
  {
    id: 'robowar',
    code: 'RW-02',
    name: 'RoboWar',
    category: 'Combat',
    tagline: 'Enter the arena',
    day: 1,
    time: '2:00 PM — 6:00 PM',
    description:
      'Design and build a remote-controlled battle bot and send it into a sealed arena against rival machines. Last bot moving wins.',
    prize: '₹10,000',
    specs: [
      { label: 'Weight', value: '≤ 8 kg' },
      { label: 'Control', value: 'Wireless' },
      { label: 'Team', value: '1 — 4' },
    ],
    image: '/images/robowar.png',
  },
  {
    id: 'vibecoding',
    code: 'VC-03',
    name: 'VibeCoding',
    category: 'Embedded',
    tagline: 'Code the bots',
    day: 1,
    time: '10:00 AM — 2:00 PM',
    description:
      'Program microcontrollers to crack robotics challenges against the clock. Circuits, sensors and logic — bring your boards to life.',
    prize: '₹12,000',
    specs: [
      { label: 'Platform', value: 'Arduino / ESP' },
      { label: 'Team', value: '1 — 2' },
      { label: 'Duration', value: '2 — 3 hrs' },
    ],
    image: '/images/workshop.png',
  },
  {
    id: 'roboquiz',
    code: 'RQ-04',
    name: 'RoboQuiz',
    category: 'Quiz',
    tagline: 'Test your knowledge',
    day: 1,
    time: '2:30 PM onwards',
    description:
      'Two rapid-fire rounds on robotics, electronics and emerging tech. Solo entry, no hardware — just what is in your head.',
    prize: 'Goodies ₹6,000',
    specs: [
      { label: 'Rounds', value: '2' },
      { label: 'Mode', value: 'Offline' },
      { label: 'Team', value: 'Solo' },
    ],
  },
  {
    id: 'roborace',
    code: 'RR-05',
    name: 'RoboRace',
    category: 'Speed',
    tagline: 'Speed, unleashed',
    day: 2,
    time: '10:00 AM — 2:00 PM',
    description:
      'Push a self-built bot through a punishing obstacle track. Precision steering matters as much as raw torque.',
    prize: '₹10,000',
    specs: [
      { label: 'Size', value: '25³ cm' },
      { label: 'Weight', value: '≤ 5 kg' },
      { label: 'Team', value: '1 — 4' },
    ],
  },
  {
    id: 'ideathon',
    code: 'ID-06',
    name: 'Ideathon',
    category: 'Innovation',
    tagline: 'Think beyond',
    day: 2,
    time: '2:00 PM — 6:00 PM',
    description:
      'Turn a raw idea into a pitch that solves a real technological or societal problem. Ten minutes on stage to convince the judges.',
    prize: '₹15,000',
    specs: [
      { label: 'Format', value: 'Pitch + Demo' },
      { label: 'Team', value: '2 — 4' },
      { label: 'Pitch', value: '10 min' },
    ],
  },
  {
    id: 'robosoccer',
    code: 'RS-07',
    name: 'RoboSoccer',
    category: 'Sports',
    tagline: 'Goal machines',
    day: 2,
    time: '2:50 PM — 6:00 PM',
    description:
      'Wired or wireless bots face off on a mini pitch. Out-manoeuvre the opposition and put the ball in the net.',
    prize: '₹10,000',
    specs: [
      { label: 'Size', value: '30³ cm' },
      { label: 'Weight', value: '≤ 5 kg' },
      { label: 'Match', value: '2.5 min' },
    ],
  },
]

export const STATS = [
  { value: '7', label: 'Events' },
  { value: '₹1L+', label: 'Prize pool' },
  { value: '48', label: 'Hours' },
  { value: '1000+', label: 'Builders' },
]

export const FAQS = [
  {
    q: 'Who can participate?',
    a: 'Any college student with a valid ID. Teams can be cross-college and cross-branch.',
  },
  {
    q: 'Do I need to bring my own robot?',
    a: 'For RoboWar, RoboRace and RoboSoccer, yes — bots must be self-built and match the size and weight limits. Robothon is simulation-based and needs only laptops.',
  },
  {
    q: 'Can I register for multiple events?',
    a: 'Yes, as long as the schedules do not clash. Check the day-wise timings on the events board.',
  },
  {
    q: 'Is accommodation provided?',
    a: 'Limited accommodation is available for outstation teams on a first-come basis. Details are shared after registration.',
  },
]
