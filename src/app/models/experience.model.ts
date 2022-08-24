export interface Experience {
    id?: number; //ID DE LA EXPERIENCIA EN DB
    position: string;
    company: string;
    img: string;
    url: string; 
    since: string;
    through: string;
    description: string;
}

/* export class Experience {
    id?: number;
    position: string;
    company: string;
    img: string;
    url: string; 
    since: string;
    to: string;
    description: string;

    constructor(
                position: string,
                company: string,
                img: string,
                url: string, 
                since: string,                
                to: string,
                description: string) {
    this.position = position;
    this.company = company;
    this.img = img;
    this.url = url; 
    this.since = since;
    this.to = to;
    this.description = description;
                } */
