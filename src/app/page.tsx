"use client";

import Image from "next/image";
import {
  Box,
  Button,
  Heading,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
} from "./components/atoms/my_chakra_components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState(30);
  const onTimeChange = (value: number) => setTime(value);
  const [type, setType] = useState("");
  const onTypeChange = (value: string) => setType(value);

  return (
    <>
      <VStack spacing="4">
        <Box h={16} />
        <Heading
          fontWeight="black"
          textAlign="center"
          size="3xl"
        >{`Ask AI what should you cook today.`}</Heading>
        <Image src="/cooking.svg" width={200} height={200} alt={"cooking"} />
        <Box h={4} />
        <Text
          alignSelf="start"
          fontSize="lg"
        >{`❶ How long can you take for cooking?`}</Text>
        <Slider
          min={10}
          max={60}
          step={10}
          value={time}
          onChange={onTimeChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize="sm" boxSize="32px">
            {time}
          </SliderThumb>
        </Slider>
        <Text alignSelf="end" fontSize="sm" color="grey">
          min
        </Text>
        <Box h={4} />
        <Text alignSelf="start" fontSize="lg">{`❷ Which meal?`}</Text>
        <Select
          placeholder="Select type"
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </Select>
        <Button
          w="full"
          rightIcon={<BsFillArrowRightCircleFill />}
          isDisabled={time === 0 || type === ""}
        >
          Ask AI
        </Button>
      </VStack>
    </>
  );
}
