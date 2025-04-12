export default interface Project {
  title: string;
  description: string;
  skills: string[];
  img: string;
  links: Links;
}

interface Links {
  front?: string;
  back?: string;
  live?: string;
  video?: string;
}
