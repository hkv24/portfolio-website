import Image from 'next/image';

import HarshFullPose from '/public/images/harsh-full-pose.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={HarshFullPose}
              alt="Fullpose of Harsh"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I am a dedicated full-stack developer specializing in Next.js and Node.js,
            with a strong passion for crafting seamless digital experiences.
            My expertise lies in developing high-performance, scalable applications
            with a keen focus on user experience, clean architecture, and maintainable code.
          </Typography>
          <Typography>
            My journey in web development began in 2022, and over the past three years,
            I have continuously evolved—adapting to emerging technologies and tackling
            complex challenges. Currently in my early twenties, I build modern,
            scalable web applications using cutting-edge technologies such as Next.js,
            TypeScript, NestJS, Prisma ORM, Tailwind CSS, Supabase, and more.
          </Typography>
          <Typography>
            I take a holistic approach to development, working on products from ideation
            to deployment, ensuring both technical excellence and visual precision.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can follow
            me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.TWITTER}
            >
              Twitter
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            .
          </Typography>
          <Typography>Quick Facts About Me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Education: B.Tech. in Mechanical Engineering from NIT Kurukshetra
              </Typography>
              <Typography component="li">
                A passionate listener and admirer of Karan Aujla&apos;s music
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                Lifelong Learner: Continuously exploring and mastering new technologies
              </Typography>
              <Typography component="li">
                Passionate about building impactful digital products
              </Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t roar 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
