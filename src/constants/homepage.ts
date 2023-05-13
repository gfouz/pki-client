import * as React from 'react';

export interface IRoutesProps {
  path: string;
  link: React.ReactNode;
  icon: React.ReactNode;
}

export interface TitleProps {
  color?: string;
}

export function fetchPdf() {
  fetch('fouzsummary.pdf').then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'fouzsummary.pdf';
      alink.click();
    });
  });
}

export const mainTitleVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 2.5, duration: 2.5 } },
};
export const mainTitleAnimation = {
  opacity: 1,
  scale: [2, 1],
  y: [0, 0, 0, 0, 0, 0, 0, 0 - 10],
};
export const reactVariant = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const primaryPictureVariants = {
  visible: {
    transition: { duration: 5 },
    x: '50px',
  },
  hidden: {
    x: 0,
  },
};
export const firstParagraphVariant = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const secondParagraphVariant = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const nodeJsLogoVariant = {
  visible: { transition: { duration: 2 }, rotateX: 0 },
  hidden: { rotateX: -90 },
};
export const navbarVariant = {
  visible: { transition: { duration: 1 }, width: '100%' },
  hidden: { width: 0 },
};
export const finalVariant = {
  visible: { transition: { duration: 0.4, delay: 0.5 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const attached_1 = `I am web developer focused on React Js and the most recently
technologies related to this library such as NextJs, framer-motion,
styled-components, chakra ui, zustand, valtio, react-router-dom,
react-hook-form, react-query and wonderful libraries made specially
for react by its own creators.`;

export const attached_2 = `I am also focused on Express Js, and related libraries to afford
security and functionality, besides very useful concepts to reuse
logic such as middlewares and i have had practical experience working
with ORM or ODM to abstract databases such as Sequelize or Mongoose. I
have also used libraries such as axios, bcrypt, jsonwebtoken, dotenv, joi and
others...`;

export const attached_3 = `I worked in the first phase of a system to generate digital 
certificates for Segurmática which is an information security company in Cuba.`;

export const experience = `I worked in the first phase of a system to generate digital 
certificates for Segurmática which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system has 
great importance for the development of digital certification in Cuba.
(PKI) project:`;

export const attached_1_spanish = `Hola, mi nombre es Giovani, comencé a aprender C++ en 2017 y fue mi
Primera experiencia con placas Arduino. Pero era una especie de
hobby hasta el año 2019 que comencé a estudiar programación web con un
mejor propósito en mente. Así que Node js fue mi elección, he estado
estudiar marcos de back-end como Express y bibliotecas relacionadas para
brindar seguridad y funcionalidad, además de conceptos muy útiles para
reutilizar lógica como middlewares y he tenido experiencia trabajando con
ORM u ODM para bases de datos abstractas como Sequelize o Mongoose. Tengo
bases de datos diseñadas y resumidas para un sistema que permitirá PKI
servicios en Cuba. `;
