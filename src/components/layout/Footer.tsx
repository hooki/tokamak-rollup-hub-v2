"use client";

import { Box, Container, Flex, Text, Link, HStack, For } from "@chakra-ui/react";
import Image from "next/image";
import GithubIcon from "@/assets/icon/github.svg";
import TelegramIcon from "@/assets/icon/telegram.svg";
import DiscordIcon from "@/assets/icon/discord.svg";
import TwitterIcon from "@/assets/icon/twitter.svg";
import MediumIcon from "@/assets/icon/medium.svg";
import YoutubeIcon from "@/assets/icon/youtube.svg";
import {
  DISCORD_URL,
  GITHUB_URL,
  MEDIUM_URL,
  TELEGRAM_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "@/consts/socials";

export default function Footer() {
  const socialLinks = [
    { href: GITHUB_URL, icon: GithubIcon, alt: "GitHub" },
    { href: TELEGRAM_URL, icon: TelegramIcon, alt: "Telegram" },
    { href: DISCORD_URL, icon: DiscordIcon, alt: "Discord" },
    { href: TWITTER_URL, icon: TwitterIcon, alt: "Twitter" },
    { href: MEDIUM_URL, icon: MediumIcon, alt: "Medium" },
    { href: YOUTUBE_URL, icon: YoutubeIcon, alt: "Youtube" }
  ];

  return (
    <Box
      as="footer"
      bg="white"
      color="#71717a"
      borderTop="1px solid #00000010"
      py={{ base: "14px", md: "32px" }}
      px={{ base: "0", md: "30px", lg: "90px" }}
    >
      <Container maxW="7xl" px={{ base: 4, sm: 6, lg: 8 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <HStack gap="4px" align="center" justify="center" mb={{ base: "14px", md: "0px" }}>
            <Text as="span" fontSize="sm" color="gray.500">
              © 2023 Tokamak Rollup Hub.
            </Text>
            <Text as="span" display={{ base: "none", md: "inline" }}>
              All Rights Reserved.
            </Text>
          </HStack>

          <HStack gap="14px">
            <For each={socialLinks}>
              {(link) => (
                <Link
                  key={link.alt}
                  href={link.href}
                  target="_blank"
                  w={{ base: "14px", md: "24px" }}
                  h={{ base: "14px", md: "24px" }}
                >
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    style={{ width: "100%", height: "100%", filter: "brightness(0) saturate(100%) invert(51%) sepia(6%) saturate(266%) hue-rotate(201deg) brightness(92%) contrast(88%)" }}
                  />
                </Link>
              )}
            </For>
          </HStack>
        </Flex>
      </Container>
    </Box >
  );
}
