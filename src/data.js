import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "Бүгд",
    icon: <BiWorld />,
  },
  {
    img: "/assets/beach_cat.jpg",
    label: "Далайн эрэг",
    icon: <TbBeach />,
    description: "Энэ үл хөдлөх нь далайн эрэг дээр байрладаг!",
  },
  {
    img: "assets/windmill_cat.webp",
    label: "Салхин сэнс",
    icon: <GiWindmill />,
    description: "Энд салхин сэнстэй үл хөдлөх байрлана!",
  },
  {
    img: "assets/modern_cat.webp",
    label: "Том хотууд",
    icon: <MdOutlineVilla />,
    description: "Энэ үл хөдлөх нь орчин үеийн!",
  },
  {
    img: "assets/countryside_cat.webp",
    label: "Хөдөө орон нутаг",
    icon: <TbMountain />,
    description: "Энэ үл хөдлөх нь хөдөө орон нутагт байрладаг!",
  },
  {
    img: "assets/pool_cat.jpg",
    label: "Гайхалтай усан сан",
    icon: <TbPool />,
    description: "Энд үзэсгэлэнтэй усан сантай!",
  },
  {
    img: "assets/island_cat.webp",
    label: "Арал",
    icon: <GiIsland />,
    description: "Энэ үл хөдлөх нь арал дээр байрладаг!",
  },
  {
    img: "assets/lake_cat.webp",
    label: "Нуурын эрэг",
    icon: <GiBoatFishing />,
    description: "Энэ үл хөдлөх нь нуурын ойролцоо!",
  },
  {
    img: "assets/skiing_cat.jpg",
    label: "Цанын бааз",
    icon: <FaSkiing />,
    description: "Энд цанын үйл ажиллагаатай!",
  },
  {
    img: "assets/castle_cat.webp",
    label: "Цайз",
    icon: <GiCastle />,
    description: "Энэ үл хөдлөх нь эртний цайз!",
  },
  {
    img: "assets/cave_cat.jpg",
    label: "Агуй",
    icon: <GiCaveEntrance />,
    description: "Энэ үл хөдлөх нь агуйд байрладаг!",
  },
  {
    img: "assets/camping_cat.jpg",
    label: "Кемпинг",
    icon: <GiForestCamp />,
    description: "Энд кемпингийн үйл ажиллагаа санал болгодог!",
  },
  {
    img: "assets/arctic_cat.webp",
    label: "Арктик",
    icon: <BsSnow />,
    description: "Энэ үл хөдлөх нь арктик орчинд байрладаг!",
  },
  {
    img: "assets/desert_cat.webp",
    label: "Цөл",
    icon: <GiCactus />,
    description: "Энэ үл хөдлөх нь цөлд байрладаг!",
  },
  {
    img: "assets/barn_cat.jpg",
    label: "Сарай",
    icon: <GiBarn />,
    description: "Энэ үл хөдлөх нь сарайд байрладаг!",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "Тансаг зэрэглэлийн",
    icon: <IoDiamond />,
    description: "Энэ үл хөдлөх нь шинэ, тансаг зэрэглэлийн!",
  },
];

export const types = [
  {
    name: "Бүхэлд байрлах",
    description: "Зочид бүхэлд нь байрлах боломжтой",
    icon: <FaHouseUser />,
  },
  {
    name: "Өрөөнд байрлах",
    description:
      "Зочид хувийн өрөөнд байрлах боломжтой, мөн дундын газруудад нэвтрэх боломжтой",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "Хамтын өрөө",
    description:
      "Зочид таньтай эсвэл бусадтай хуваалцдаг өрөөнд байрлах боломжтой",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Усанд орох банн",
    icon: <PiBathtubFill />,
  },
  {
    name: "Цагаан хэрэгсэл",
    icon: <FaPumpSoap />,
  },
  {
    name: "Гадна шүршүүр",
    icon: <FaShower />,
  },
  {
    name: "Угаалгын машин",
    icon: <BiSolidWasher />,
  },
  {
    name: "Хатаагч",
    icon: <BiSolidDryer />,
  },
  {
    name: "Өлгүүр",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Индүү",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Ажлын хэсэг",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Агааржуулагч",
    icon: <BsSnow />,
  },
  {
    name: "Халаалт",
    icon: <GiHeatHaze />,
  },
  {
    name: "Хяналтын камер",
    icon: <GiCctvCamera />,
  },
  {
    name: "Галын хор",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "Анхны тусламж",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Гал тогооны хэрэгсэл",
    icon: <FaKitchenSet />,
  },
  {
    name: "Хөргөгч",
    icon: <BiSolidFridge />,
  },
  {
    name: "Богино долгионы зуух",
    icon: <MdMicrowave />,
  },
  {
    name: "Зуух",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Гадна хооллох талбай",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Хашаа эсвэл тагттай",
    icon: <MdBalcony />,
  },
  {
    name: "Ил Гал",
    icon: <GiCampfire />,
  },
  {
    name: "Цэцэрлэг",
    icon: <MdYard />,
  },
  {
    name: "Үнэгүй зогсоол",
    icon: <AiFillCar />,
  },
  
  {
    name: "Тэжээвэр амьтантай",
    icon: <MdPets />
  }
];
