"use client";

import { XIcon } from "@/components/icons/x-icon";
import { DiscordIcon } from "@/components/icons/discord-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { WaitlistForm } from "./waitlist-form";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { SocialIcon } from "@/components/social-icon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion, easeOut} from "motion/react";
import {GithubIcon} from "@/components/icons/github-icon";

const variants = {
  hide: {opacity: 0,
    translateY: -10
  },
  visible: (custom: number) => ({
    opacity: 1, translateY: 0,
    transition: {
      delay: custom * 0.2,
      ease: easeOut,
      duration: 0.5
    }
  })
}

export function WaitlistSignup() {
  return (
    <div className="w-full max-w-2xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <motion.div initial="hide" animate="visible" className="flex-1 flex flex-col justify-center items-center text-center">
        <header  className="space-y-2 mb-10">
          <motion.h1 custom={0} variants={variants} className="leading-normal text-4xl sm:text-6xl  bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            Join Our Waiting List
          </motion.h1>
          <motion.div custom={1} variants={variants}>
            <p className="text-lg sm:text-xl  text-muted-foreground text-balance">
              Be part of something truly extraordinary. Join thousands of others
              already gaining early access to our revolutionary new product.
            </p>
          </motion.div>
        </header>
        <motion.div custom={2} variants={variants} className="w-full max-w-9/12">
          <WaitlistForm />
        </motion.div>
        <motion.div custom={3} variants={variants} className="flex items-center justify-center  space-x-4">
          <div className="flex -space-x-3">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=10" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=20" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=5" />
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=40" />
            </Avatar>
          </div>
          <p className="text-foreground text-sm opacity-70">
            200+ people on the waitlist
          </p>
        </motion.div>
      </motion.div>
      <div className="pt-8 flex justify-center space-x-6">
        <SocialIcon
          href="https://github.com/bundui/waitly"
          target="_blank"
          icon={<GithubIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://x.com/TobyBelhome"
          target="_blank"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://instagram.com"
          target="_blank"
          icon={<InstagramIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://discord.com"
          target="_blank"
          icon={<DiscordIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://facebook.com"
          target="_blank"
          icon={<FacebookIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://linkedin.com"
          target="_blank"
          icon={<LinkedInIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  );
}
