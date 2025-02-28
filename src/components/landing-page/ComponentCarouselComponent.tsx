"use client";
import { COMPONENT_LIST } from "@/consts/texts";
import { Flex, Text } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import CardComponent from "./CardComponent";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1280 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1280, min: 800 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 800, min: 360 },
    items: 1,
    slidesToSlide: 1,
  },
  base: {
    breakpoint: { max: 360, min: 0 },
    items: 1,
  },
};

export default function ComponentCarouselComponent() {
  const carouselRef = useRef<Carousel>(null);
  return (
    <Flex flexDir={"column"} gap={"45px"}>
      <Flex
        gap={"24px"}
        alignItems={{ base: "flex-start", sm: "center" }}
        flexDirection={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "42px", md: "54px" }}
          fontWeight={700}
          lineHeight={"normal"}
          letterSpacing={"-1.62px"}
        >
          Building the Future
        </Text>
        <Flex>
          <IoIosArrowBack
            className="arrow-icon"
            onClick={() => {
              const nextSlide =
                (carouselRef.current?.state.currentSlide ?? 0) - 1;
              carouselRef.current?.goToSlide(nextSlide);
            }}
          />
          <IoIosArrowForward
            className="arrow-icon"
            onClick={() => {
              const nextSlide =
                (carouselRef.current?.state.currentSlide ?? 0) + 1;
              carouselRef.current?.goToSlide(nextSlide);
            }}
          />
        </Flex>
      </Flex>
      <Carousel
        ref={carouselRef}
        swipeable={false}
        draggable={false}
        responsive={responsive}
        transitionDuration={500}
        itemClass="carousel-item"
        containerClass="carousel-container"
        infinite={true}
        arrows={false}
        rtl={false}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {COMPONENT_LIST.map((component) => (
          <CardComponent
            key={component.title}
            title={component.title}
            description={component.description}
            featured={component.featured}
          />
        ))}
      </Carousel>
    </Flex>
  );
}
