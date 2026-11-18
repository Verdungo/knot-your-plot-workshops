import angelImage from "@/assets/holiday/hanging/angel.png";
import wreathImage from "@/assets/holiday/hanging/wreath.png";
import snowflakeImage from "@/assets/holiday/hanging/snowflake.png";
import candyCaneImage from "@/assets/holiday/hanging/candy-cane.png";

export type Ornament = {
  name: string;
  image?: string;
  alt: string;
  width?: number;
  height?: number;
};

export const ornaments: Ornament[] = [
  {
    name: "Angel",
    image: angelImage,
    alt: "Cream macramé angel with a wooden bead, star and soft fringe",
    width: 371,
    height: 800,
  },
  {
    name: "Wreath",
    image: wreathImage,
    alt: "Red macramé wreath with a wooden bead and a small ribbon bow",
    width: 477,
    height: 800,
  },
  {
    name: "Snowflake",
    image: snowflakeImage,
    alt: "Cream macramé snowflake with six woven points and a hanging loop",
    width: 692,
    height: 800,
  },
  {
    name: "Candy Cane",
    image: candyCaneImage,
    alt: "Red and cream braided macramé candy cane with a red bow and tassels",
    width: 387,
    height: 800,
  },
  {
    name: "Ornament 5",
    alt: "Placeholder for the fifth handmade macramé ornament",
  },
  {
    name: "Ornament 6",
    alt: "Placeholder for the sixth handmade macramé ornament",
  },
];
