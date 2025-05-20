
import { TeamCardProps } from '@/interface';
import Image from 'next/image';
import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamCard: React.FC<TeamCardProps> = ({ name, title, bio, avatar, social }) => {
    return (
      <div className="flex flex-col items-center md:gap-10 gap-2 md:flex-row mb-3">
        <div className="flex-shrink-0 flex items-center">
          <Slide direction="down" duration={1000}>
            <Image
              className="rounded-full border-4 border-background hover:border-blue w-44 h-44 object-cover md:w-56 md:h-56"
              src={avatar}
              alt={`${name} Avatar`}
            />
          </Slide>
        </div>
        <div className="flex-grow flex flex-col justify-center gap-2 text-center md:text-left">
          <Fade cascade damping={0.1}>
            <Slide direction="down" duration={1000}>
              <h3>{name}</h3>
            </Slide>
            <Zoom duration={1000} delay={500}>
              <h4>{title}</h4>
            </Zoom>
            <hr className="text-primary" />
            <Zoom duration={1000} delay={500}>
              <p className="mt-2">{bio}</p>
            </Zoom>
            <Slide direction="left" duration={1000}>
              <div className="social-icons justify-center md:justify-start">
                {social.twitter && (
                  <a href={social.twitter}>
                    <FaTwitter />
                  </a>
                )}
                {social.instagram && (
                  <a
                    href={social.instagram}
                  >
                    <FaInstagram />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </Slide>
          </Fade>
        </div>
      </div>
    );
};

export default TeamCard;
