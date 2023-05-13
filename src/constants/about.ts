import * as React from 'react';
import { keyframes } from 'styled-components';

export const spin1 = keyframes`
  from { transform: rotateY(0); }
  to { transform: rotateY(0); }
  `;
export const spin2 = keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(45deg); }
  `;
export const spin3 = keyframes`
  from { transform: rotateY(45deg); }
  to { transform: rotateY(90deg); }
  `;
export const spin4 = keyframes`
  from { transform: rotateY(90deg); }
  to { transform: rotateY(120deg); }
  `;
export const spin5 = keyframes`
  from { transform: rotateY(90deg); }
  to { transform: rotateY(180deg); }
  `;
export const spin6 = keyframes`
  from { transform: rotateY(90deg); }
  to { transform: rotateY(-360deg); }
  `;
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

export const mainSubtitleAnimation = {
  opacity: 1,
  scale: [4, 1],
  y: [0, 0, 0, 0, 0, -10],
};

export const mainTitleVariant = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
};

export const reactVariant = {
  visible: { transition: { duration: 3 }, opacity: 1 },
  hidden: { opacity: 0 },
};
export const styledWomanVariant = {
  visible: { transition: { duration: 2 }, opacity: 1 },
  hidden: { opacity: 0 },
};

export const attached_1 = `Hello my name is Giovani and i love knowledge or learning about new
things and i like to spend time listening to English music or making
things with the help of electronics. I also like to spend my time
creating react components and mixing styled-components and framer-motion
together to get the most advantages of both technologies and i 
get all of these benefits while still writing the CSS we know and love, 
just bound to individual components.
`;

export const attached_2 = `React has been my favorite choice over vue or any other framework,
however technology changes, and it changes very quickly so that i am
open-minded to new technologies in order to learn them and then also
take advantage of them. I currently use react libraries such as
react-hook-form, react-query, valtio, zustand, styled-components,
framer-motion, chakra ui and the popular react-router-dom. But i have recently heard
about Golang for server side and it will be a pleasure to learn it too.`;

export const attached_3 = `Tell me and I will forget, show me and I may
 remenber, involve me and I will understand`;

export const experience = `I worked in the first phase of a system to generate digital 
certificates for Segurmática which is the information security company in Cuba, 
I participated in the creation or abstraction of the database in this case relational 
using PostgreSQL and Sequelize as ORM. As well as designed the Rest Api of routes and 
controllers with Express and Node. I used React for client side rendering, this system has 
importance for the development of digital certification in Cuba`;

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

export const about_react = `Being a part of the JavaScript language, 
using React spawns lots of advantages. Products built with React are 
simple to scale and grants outstanding productivity, there are workflow 
patterns for convenient teamwork, UI code is readable and maintainable, 
and more.`;

export const about_nestjs = `NestJS has proven to be the fastest-growing 
TypeScript framework for building flexible, scalable, large-scale, 
and enterprise-ready backend applications using Node.js. 
When building highly testable, well-structured, and maintainable backend 
applications using TypeScript.`;
