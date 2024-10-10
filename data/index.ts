import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an all-in-one family-management app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Volunteer Work - Our Lady of Fatima, Artesia",
    des: "A catholic church in Artesia, CA, that needed a website to connect with its parishioners.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://olfartesia.org",
  },
  {
    id: 2,
    title: "Client - Cadillac Freedom Festival",
    des: "The annual Cadillac Freedom Festival is a celebration of the American spirit over the 4th of July weekend.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://www.cadillacfreedomfestival.com",
  },
  {
    id: 3,
    title: "Client - Off Court Creations",
    des: "Explore the wonders of meticulously crafted merchandise for your sports brand.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://www.offcourtcreations.com",
  },
  {
    id: 4,
    title: "SaaS - Trangual",
    des: "A realtime language translation app that helps you communicate with anyone, regardless of language.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://www.trangual.com",
  },
];

export const testimonials = [
  {
    quote:
      "Todd's work on our parish website was nothing short of miraculous. He transformed our outdated site into a modern, user-friendly platform that has significantly improved our communication with parishioners. His attention to detail and understanding of our community's needs were truly impressive.",
    name: "Rev. John Cordero",
    title: "MMHC, Our Lady of Fatima",
    company: "olf",
    profilePic: "/images/olfpfp.svg",
  },
  {
    quote:
      "Working with Todd was an absolute game-changer for Off Court Creations. He didn't just build a website; he created an immersive online experience that perfectly captures the essence of our brand. His technical expertise combined with his creative vision resulted in a platform that has significantly boosted our online sales and customer engagement.",
    name: "Abdurahim Shahrani",
    title: "Founder & CEO, Off Court Creations",
    company: "occ",
    profilePic: "/images/occpfp.svg",
  },
  {
    quote:
      "Todd's contribution to the Cadillac Freedom Festival website was instrumental in making our event a resounding success. His innovative approach to design and functionality resulted in a site that not only looked great but also handled high traffic volumes effortlessly. Todd's ability to translate our patriotic spirit into a digital format was truly remarkable.",
    name: "John Dykstra",
    title: "President, Cadillac Freedom Festival",
    company: "ccf",
    profilePic: "/images/cffpfp.svg",
  },
  {
    quote:
      "Collaborating with Todd was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Todd's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Todd is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    company: "ast",
    profilePic: "/images/astpfp.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "System Operations Engineer & Support Specialist - Tangerine Global",
    desc: "Provide technical support and managed systems for a diverse clientele, ensuring seamless operations and high-quality service.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Founder, CEO, & Developer -  Momentum Web Design, LLC",
    desc: "My personal business where I offer web design and development services to clients.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Laboratory Triage Tech - Long Beach Memorial Medical Center",
    desc: "Assessed patient conditions, collected samples, and provided initial medical information to healthcare providers.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ToddW317",
  },
];
