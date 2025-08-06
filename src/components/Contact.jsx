// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import { Email, LinkedIn, GitHub, ArrowOutward } from '@mui/icons-material';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-12 md:flex-row">
        <motion.div
          variants={slideIn('left', 'tween', 0.1, 0.5)}
          className="flex-[0.75] rounded-2xl bg-gray-100 dark:bg-tertiary p-8"
        >
          <p className={`${styles.sectionSubText} text-secondary dark:text-secondary-dark`}>
            Get in touch
          </p>
          <h3 className={`${styles.sectionHeadText} text-black dark:text-white`}>Contact.</h3>
          <div className="flex-center-center mt-8 flex-wrap gap-2">
            {[
              {
                icon: <Email />,
                href: 'mailto:kachadeaditya@gmail.com',
                label: 'Email',
              },
              {
                icon: <LinkedIn />,
                href: 'https://www.linkedin.com/in/aditya-kachade/',
                label: 'LinkedIn',
              },
              {
                icon: <GitHub />,
                href: 'https://github.com/adityakachade/adityakachade',
                label: 'GitHub',
              },
            ].map((b, i) => (
              <Button
                key={i}
                component="a"
                href={b.href}
                target="_blank"
                rel="noopener"
                variant="outlined"
                endIcon={b.icon}
                className="!border-black dark:!border-white !text-black dark:!text-white"
              >
                {b.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.1, 0.5)}
          className="md:h-auto md:flex-1"
        >
          <img
            src="https://mern-rajesh-portfolio.web.app/assets/contact.jpeg"
            alt="contact-us"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>

      <div className="mb-4 ml-5">
        <h1 className="my-3 text-xl font-semibold text-black dark:text-white">
          Thanks for scrolling.
        </h1>
        <div className="flex gap-4">
          <Button
            component="a"
            href="https://drive.google.com/file/d/1vnMCHwF38C2KsyvpkvI8TuSB3qwUN5dc/view"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            endIcon={<ArrowOutward />}
            className="!border-black dark:!border-white !text-black dark:!text-white"
          >
             Resume
          </Button>
        </div>
      </div>

      <hr className="ml-2 border-secondary dark:border-secondary-dark" />
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
