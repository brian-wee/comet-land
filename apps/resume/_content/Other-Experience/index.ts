import data from './data.json';

export interface Experience {
  title: {
    text: string;
    githubLink: string | null;
    otherLink: string | null;
  };
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  which: string[];
}

export interface OtherExperience {
  title: string;
  list: Experience[];
  title2: string;
  list2: Experience[];
}

export { data };
