import angel from "@/assets/workshop-ornaments/angel.jpg.asset.json";
import wreath from "@/assets/workshop-ornaments/wreath.jpg.asset.json";
import snowflake from "@/assets/workshop-ornaments/snowflake.jpg.asset.json";
import candyCane from "@/assets/workshop-ornaments/candy-cane.jpg.asset.json";
import heartAngel from "@/assets/workshop-ornaments/heart-angel.jpg.asset.json";
import redTree from "@/assets/workshop-ornaments/red-tree.jpg.asset.json";

export type Ornament = {
  name: string;
  image?: string;
  alt: string;
  width?: number;
  height?: number;
};

const size = { width: 1547, height: 1920 };

export const ornaments: Ornament[] = [
  { name: "Gnome", image: angel.url, alt: "Cream macramé angel with a wooden bead head and soft fringe on a teal background", ...size },
  { name: "Wreath", image: wreath.url, alt: "Red macramé wreath with a small bow on a teal background", ...size },
  { name: "Snowflake", image: snowflake.url, alt: "Cream macramé snowflake with woven points on a teal background", ...size },
  { name: "Candy Cane", image: candyCane.url, alt: "Red and cream braided macramé candy cane on a teal background", ...size },
  { name: "Angel", image: heartAngel.url, alt: "Cream macramé angel with beige braided hair holding a wooden heart, on a teal background", ...size },
  { name: "Christmas Tree", image: redTree.url, alt: "Red macramé Christmas tree with a gold bead and gold-wrapped trunk on a teal background", ...size },
];
