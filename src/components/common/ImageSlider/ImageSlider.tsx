import React, { useState, ReactElement } from "react";

import SwiperCore, { FreeMode, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/react";

SwiperCore.use([FreeMode, Thumbs]);

const fakeProps = [
  "https://i.imgur.com/KUuRtTc.jpeg",
  "https://i.imgur.com/SFTocC8.jpeg",
  "https://i.imgur.com/YV3EI8I.jpeg",
  "https://i.imgur.com/vsZx20u.jpeg",
];

/**
 * This is a wrapper around the swiper library.
 * It is used to display a carousel of thumbnails.
 * @returns {ReactElement} The rendered component.
 */
export const ImageSlider = (): ReactElement => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <Flex
      maxW="inherit"
      width="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box maxW="100%">
        <Swiper
          className="cover-image"
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          style={{ marginBottom: "20px" }}
        >
          {fakeProps.map((element, index) => {
            return (
              <SwiperSlide
                key={`slide-${index}`}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  src={element}
                  alt="product image"
                  height="154px"
                  width="200px"
                  borderRadius="8px"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          className="thumbs"
          spaceBetween={16}
          slidesPerView={4}
          freeMode
          onSwiper={setThumbsSwiper}
          style={{ height: "48px", width: "280px" }}
        >
          {fakeProps.map((element, index) => {
            return (
              <SwiperSlide key={`thumb-${index}`} style={{ height: "48px", width: "48px" }}>
                <Image
                  src={element}
                  alt="product image"
                  height="48px"
                  width="48px"
                  borderRadius="8px"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Flex>
  );
};
