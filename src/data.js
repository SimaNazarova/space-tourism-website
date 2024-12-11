import moon from "./images/moon.png";
import mars from "./images/mars.png";
import europa from "./images/europa.png";
import titan from "./images/titan.png";
import commander from "./images/commander.png";
import specialist from "./images/specialist.png";
import pilot from "./images/pilot.png";
import engineer from "./images/engineer.png";
export const pages = [
  {
    destination: {
      title: {
        id: "01",
        text: "Pick your destination",
      },

      trips: [
        {
          name: "moon",
          img: moon,
          text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          time: "3 days",
        },
        {
          name: "mars",
          img: mars,
          text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 MIL. km",
          time: "9 months",
        },
        {
          name: "europa",
          img: europa,
          text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 MIL. km",
          time: "3 years",
        },
        {
          name: "titan",
          img: titan,
          text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 BIL. km",
          time: "7 years",
        },
      ],
    },
  },
  {
    crew: {
      title: {
        id: "02",
        text: "Meet your crew",
      },
      team: [
        {
          id: 1,
          name: "Douglas Hurley",
          text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
          job: "Commander",
          img: commander,
        },
        {
          id: 2,
          name: "MARK SHUTTLEWORTH",
          text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
          job: "Mission Specialist",
          img: specialist,
        },
        {
          id: 3,
          name: "Victor Glover",
          text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
          job: "PILOT",
          img: pilot,
        },
        {
          id: 4,
          name: "Anousheh Ansari",
          text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
          job: "Flight Engineer",
          img: engineer,
        },
      ],
    },
  },
];

export const menuLinks = [
  {
    id: 0,
    name: "home",
    number: "00",
    link: "/",
  },
  {
    id: 1,
    name: "destination",
    number: "01",
    link: "/destination",
  },
  {
    id: 2,
    name: "crew",
    number: "02",
    link: "/crew",
  },
  {
    id: 3,
    name: "technology",
    number: "03",
    link: "/technology",
  },
];
