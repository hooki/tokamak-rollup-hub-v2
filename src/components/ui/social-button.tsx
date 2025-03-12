import { Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import facebookIcon from "@/assets/icon/facebook.svg";
import documentIcon from "@/assets/icon/document.svg";
import linkedinIcon from "@/assets/icon/linkedin.svg";
import notionIcon from "@/assets/icon/notion.svg";
import telegramIcon from "@/assets/icon/telegram.svg";
import twitterIcon from "@/assets/icon/twitter.svg";
import discordIcon from "@/assets/icon/discord.svg";
import githubIcon from "@/assets/icon/github.svg";
import mediumIcon from "@/assets/icon/medium.svg";
import youtubeIcon from "@/assets/icon/youtube.svg";

import facebookWhiteIcon from "@/assets/icon/facebook-white.svg";
import documentWhiteIcon from "@/assets/icon/document-white.svg";
import linkedinWhiteIcon from "@/assets/icon/linkedin-white.svg";
import notionWhiteIcon from "@/assets/icon/notion-white.svg";
import telegramWhiteIcon from "@/assets/icon/telegram-white.svg";
import twitterWhiteIcon from "@/assets/icon/twitter-white.svg";
import discordWhiteIcon from "@/assets/icon/discord-white.svg";
import githubWhiteIcon from "@/assets/icon/github-white.svg";
import mediumWhiteIcon from "@/assets/icon/medium-white.svg";
import youtubeWhiteIcon from "@/assets/icon/youtube-white.svg";

const iconMap = {
  telegram: telegramIcon,
  twitter: twitterIcon,
  discord: discordIcon,
  github: githubIcon,
  medium: mediumIcon,
  youtube: youtubeIcon,
  facebook: facebookIcon,
  document: documentIcon,
  linkedin: linkedinIcon,
  notion: notionIcon,
  facebookWhite: facebookWhiteIcon,
  documentWhite: documentWhiteIcon,
  linkedinWhite: linkedinWhiteIcon,
  notionWhite: notionWhiteIcon,
  telegramWhite: telegramWhiteIcon,
  twitterWhite: twitterWhiteIcon,
  discordWhite: discordWhiteIcon,
  githubWhite: githubWhiteIcon,
  mediumWhite: mediumWhiteIcon,
  youtubeWhite: youtubeWhiteIcon,
};

interface SocialButtonProps {
  icon: string;
  label: string;
  link: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  label,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      padding={{ base: "9px 9px", md: "9px 15px" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"6px"}
      borderRadius={"17.5px"}
      border={isHovered ? "1px solid transparent" : "1px solid #DFE4EE"}
      onClick={() => window.open(link, "_blank")}
      bgColor={isHovered ? "#1C1C1C" : "transparent"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor={"pointer"}
    >
      <Image
        src={
          isHovered
            ? iconMap[`${icon}White` as keyof typeof iconMap]
            : iconMap[icon as keyof typeof iconMap]
        }
        alt={label}
        width={14}
        height={14}
      />
      <Text
        fontSize={"13px"}
        fontWeight={600}
        color={isHovered ? "#FFF" : "#1C1C1C"}
        fontFamily={"Proxima Nova"}
        display={{ base: "none", md: "flex" }}
      >
        {label}
      </Text>
    </Button>
  );
};
