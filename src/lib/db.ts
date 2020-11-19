import AdvancedWeapons from '../images/icon_advanced_weaponry.png';
import Beer from '../images/icon_beer.png';
import Brass from '../images/icon_brass.png';
import Bread from '../images/icon_bread.png';
import Bricks from '../images/icon_bricks.png';
import CannedFood from '../images/icon_canned_goulash.png';
import Caoutchouc from '../images/icon_caoutchouc.png';
import Cement from '../images/icon_cement.png';
import Champagne from '../images/icon_champagne.png';
import Charcoal from '../images/icon_coal.png';
import Clay from '../images/icon_clay.png';
import CoachMaker from '../images/icon_steam_machine.png';
import CoalMine from '../images/icon_coal.png';
import Concrete from '../images/icon_reinforced_concrete.png';
import CopperMine from '../images/icon_copper.png';
import Cotton from '../images/icon_cotton.png';
import CottonFur from '../images/icon_cotton_fur.png';
import Dynamite from '../images/icon_dynamite.png';
import Filament from '../images/icon_carbon_filament.png';
import Fish from '../images/icon_fish.png';
import Flour from '../images/icon_flour.png';
import Fur from '../images/icon_fur.png';
import FurCoats from '../images/icon_fur_coats.png';
import Glass from '../images/icon_glass.png';
import Glasses from '../images/icon_glasses.png';
import Gold from '../images/icon_gold_ore.png';
import GoldBar from '../images/icon_gold.png';
import Goulash from '../images/icon_goulash.png';
import GrainFarm from '../images/icon_cereals.png';
import Gramophone from '../images/icon_telephones.png';
import HighWheeler from '../images/icon_high_wheeler.png';
import Hops from '../images/icon_hops.png';
import Iron from '../images/icon_iron.png';
import Jewellers from '../images/icon_jewelry.png';
import LightBulb from '../images/icon_light_bulb.png';
import Malt from '../images/icon_malt.png';
import MarquetryWorkshop from '../images/icon_inlay.png';
import MeatRaw from '../images/icon_meat_raw.png';
import Pearls from '../images/icon_pearls.png';
import Pepper from '../images/icon_pepper.png';
import Pigs from '../images/icon_pigs.png';
import Potatoes from '../images/icon_potatoes.png';
import Quartz from '../images/icon_quartz_sand.png';
import RenderingWorks from '../images/icon_tallow.png';
import Sails from '../images/icon_sail.png';
import Sausage from '../images/icon_meat_sausage.png';
import Schnapps from '../images/icon_schnapps.png';
import SewingMachine from '../images/icon_sewing_machine.png';
import Soap from '../images/icon_soap.png';
import SteamCarriage from '../images/icon_steam_carriage.png';
import Steel from '../images/icon_steel.png';
import SteelBeams from '../images/icon_beams.png';
import Vineyard from '../images/icon_grapes.png';
import Watch from '../images/icon_time.png';
import Weapons from '../images/icon_weapons.png';
import WindowMaker from '../images/icon_glass_window.png';
import Wood from '../images/icon_wood_log.png';
import WoodPlanks from '../images/icon_wooden_planks.png';
import Wool from '../images/icon_wool.png';
import WorkingClothes from '../images/icon_working_clothes.png';
import ZincMine from '../images/icon_tin_ore.png';

const brass = (amount: number) => ({
  img: Brass,
  name: 'Brass Smeltery',
  needed: amount,
});
const glass_maker = (amount: number) => ({
  img: Glass,
  name: 'Glass Maker',
  needed: amount,
});
const copper_mine = (amount: number) => ({
  img: CopperMine,
  name: 'Copper Mine',
  needed: amount,
});
const gold = (amount: number) => ({
  img: Gold,
  name: 'Gold Mine',
  needed: amount,
});
const charcoal = (amount: number) => ({
  img: Charcoal,
  name: 'Charcoal Kiln',
  needed: amount,
});
const rendering_works = (amount: number) => ({
  img: RenderingWorks,
  name: 'Rendering Works',
  needed: amount,
});
const coal_mine = (amount: number) => ({
  img: CoalMine,
  name: 'Coal Mine',
  needed: amount,
});
const furnace = (amount: number) => ({
  img: Steel,
  name: 'Furnace',
  needed: amount,
});
const grain_farm = (amount: number) => ({
  img: GrainFarm,
  name: 'Grain Farm',
  needed: amount,
});
const iron = (amount: number) => ({
  img: Iron,
  name: 'Iron Mine',
  needed: amount,
});
const sand_mine = (amount: number) => ({
  img: Quartz,
  name: 'Sand Mine',
  needed: amount,
});
const wool = (amount: number) => ({
  img: Wool,
  name: 'sheep farm',
  needed: amount,
});
const pigs = (amount: number) => ({
  img: Pigs,
  name: 'Pig Farm',
  needed: amount,
});
const wood = (amount: number) => ({
  img: Wood,
  name: "Lumberjack's Hut",
  needed: amount,
});
const caoutchouc = (amount: number) => ({
  img: Caoutchouc,
  name: 'Caoutchouc Plantation',
  needed: amount,
});
const zinc_mine = (amount: number) => ({
  img: ZincMine,
  name: 'Zinc Mine',
  needed: amount,
});
const goldSmith = (amount: number) => ({
  img: GoldBar,
  name: 'Goldsmiths',
  needed: 4,
});

export const items = [
  {
    final_product: 'timber',
    level: 'farmer',
    output: 4,
    steps: [
      wood(1),
      {
        img: WoodPlanks,
        name: 'sawmill',
        needed: 1,
      },
    ],
  },
  {
    final_product: 'fish',
    level: 'farmer',
    output: 2,

    steps: [{ img: Fish, name: 'fishery', needed: 1 }],
  },
  {
    final_product: 'schnapps',
    level: 'farmer',
    output: 2,
    steps: [
      {
        img: Potatoes,
        name: 'potato farm',
        needed: 1,
      },
      { img: Schnapps, name: 'schnapps distillery', needed: 1 },
    ],
  },
  {
    final_product: 'work_clothes',
    steps: [
      wool(1),
      {
        img: WorkingClothes,
        name: 'framework knitters',
        needed: 1,
      },
    ],
    output: 1,
    level: 'farmer',
  },
  {
    final_product: 'bricks',
    steps: [
      {
        img: Clay,
        name: 'Clay Pit',
        needed: 1,
      },
      {
        img: Bricks,
        name: 'Brick Factory',
        needed: 2,
      },
    ],
    output: 2,
    level: 'workers',
  },
  {
    final_product: 'sausages',
    steps: [
      pigs(1),
      {
        img: Sausage,
        name: 'Slaughterhouse',
        needed: 1,
      },
    ],
    output: 1,
    level: 'workers',
  },
  {
    final_product: 'bread',
    steps: [
      grain_farm(2),
      {
        img: Flour,
        name: 'Flour Mill',
        needed: 1,
      },
      {
        img: Bread,
        name: 'Bakery',
        needed: 2,
      },
    ],
    output: 2,
    level: 'workers',
  },
  {
    final_product: 'sails',
    steps: [
      wool(1),
      {
        img: Sails,
        name: 'Sailmakers',
        needed: 1,
      },
    ],
    output: 2,
    level: 'workers',
  },
  {
    final_product: 'steal_beams',
    steps: [
      iron(1),
      charcoal(2),
      furnace(2),
      {
        img: SteelBeams,
        name: 'Steelworks',
        needed: 3,
      },
    ],
    output: 4,
    level: 'workers',
  },
  {
    final_product: 'soap',
    steps: [
      pigs(2),
      rendering_works(4),
      {
        img: Soap,
        name: 'Soap Factory',
        needed: 1,
      },
    ],
    output: 2,
    level: 'workers',
  },
  {
    final_product: 'weapons',
    steps: [
      iron(1),
      charcoal(2),
      furnace(2),
      {
        img: Weapons,
        name: 'Weapon Factory',
        needed: 1,
      },
    ],
    output: 4,
    level: 'workers',
  },
  {
    final_product: 'beer',
    steps: [
      grain_farm(2),
      {
        img: Malt,
        name: 'Malthouse',
        needed: 1,
      },
      {
        img: Hops,
        name: 'Hop Farm',
        needed: 3,
      },
      {
        img: Beer,
        name: 'Brewery',
        needed: 2,
      },
    ],
    output: 2,
    level: 'workers',
  },
  {
    final_product: 'windows',
    steps: [
      sand_mine(2),
      glass_maker(2),
      wood(1),
      {
        img: WindowMaker,
        name: 'Window Makers',
        needed: 4,
      },
    ],
    output: 4,
    level: 'Artisans',
  },
  {
    final_product: 'canned_food',
    steps: [
      {
        img: MeatRaw,
        name: 'Cattle Farm',
        needed: 8,
      },
      {
        img: Pepper,
        name: 'Red Pepper Farm',
        needed: 8,
      },
      {
        img: Goulash,
        name: 'Artisanal Kitchen',
        needed: 8,
      },
      iron(1),
      {
        img: CannedFood,
        name: 'Cannery',
        needed: 6,
      },
    ],
    output: 4,
    level: 'Artisans',
  },
  {
    final_product: 'Sewing Machines',
    steps: [
      iron(1),
      coal_mine(1),
      furnace(2),
      wood(1),
      {
        img: SewingMachine,
        name: 'Sewing Machine Factory',
        needed: 2,
      },
    ],
    output: 4,
    level: 'Artisans',
  },
  {
    final_product: 'Fur Coats',
    steps: [
      {
        img: Cotton,
        name: 'Cotton Plantation',
        needed: 2,
      },
      {
        img: CottonFur,
        name: 'Cotton Mill',
        needed: 1,
      },
      {
        img: Fur,
        name: 'Hunting Cabin',
        needed: 2,
      },
      {
        img: FurCoats,
        name: 'Fur Dealer',
        needed: 1,
      },
    ],
    output: 2,
    level: 'Artisans',
  },
  {
    final_product: 'Reinforced Concrete',
    steps: [
      iron(1),
      coal_mine(1),
      furnace(2),
      {
        img: Cement,
        name: 'Limestone Quarry',
        needed: 2,
      },
      {
        img: Concrete,
        name: 'Conrete Factory',
        needed: 4,
      },
    ],
    output: 4,
    level: 'Engineers',
  },
  {
    final_product: 'Glasses',
    steps: [
      sand_mine(2),
      copper_mine(1),
      zinc_mine(1),
      {
        img: Glass,
        name: 'Glassmakers',
        needed: 1,
      },
      brass(2),
      {
        img: Glasses,
        name: 'Spectacle Factory',
        needed: 3,
      },
    ],
    output: 2,
    level: 'Engineers',
  },
  {
    final_product: 'Advanced Weapons',
    steps: [
      pigs(4),
      rendering_works(4),
      {
        img: ZincMine,
        name: 'Zinc Mine',
        needed: 1,
      },
      iron(1),
      coal_mine(1),
      {
        img: Dynamite,
        name: 'Dynamite Factory',
        needed: 4,
      },
      furnace(2),
      {
        img: AdvancedWeapons,
        name: 'Heavy Weapons Factory',
        needed: 4,
      },
    ],
    output: 4,
    level: 'Engineers',
  },
  {
    final_product: 'Penny Farthings',
    steps: [
      iron(1),
      coal_mine(1),
      furnace(2),
      coal_mine(1),
      {
        img: Caoutchouc,
        name: 'Caoutchouc Plantation',
        needed: 4,
      },
      furnace(2),
      {
        img: HighWheeler,
        name: 'Bicycle Factory',
        needed: 1,
      },
    ],
    output: 4,
    level: 'Engineers',
  },
  {
    final_product: 'Steam Motors',
    steps: [
      iron(1),
      coal_mine(1),
      copper_mine(2),
      zinc_mine(1),
      furnace(2),
      brass(4),
      {
        img: SteamCarriage,
        name: 'Motor Assembly Line',
        needed: 3,
      },
    ],
    output: 4,
    level: 'Engineers',
  },
  {
    final_product: 'Pocket Watches',
    steps: [
      gold(10),
      coal_mine(1),
      sand_mine(2),
      goldSmith(4),
      glass_maker(2),
      {
        img: Watch,
        name: 'Clockmakers',
        needed: 3,
      },
    ],
    output: 4,
    level: 'Engineers',
  },
  {
    final_product: 'Light Bulbs',
    steps: [
      coal_mine(1),
      sand_mine(2),
      {
        img: Filament,
        name: 'Filament Factory',
        needed: 4,
      },
      glass_maker(2),
      {
        img: LightBulb,
        name: 'Light Bulb Factory',
        needed: 4,
      },
    ],
    output: 4,
    level: 'Engineers',
  },
  {
    final_product: 'Champagne',
    steps: [
      sand_mine(1),
      glass_maker(1),
      {
        img: Vineyard,
        name: 'Vineyard',
        needed: 4,
      },
      {
        img: Champagne,
        name: 'Champagne Cellar',
        needed: 1,
      },
    ],
    output: 2,
    level: 'Investors',
  },
  {
    final_product: 'Jewellery',
    steps: [
      gold(10),
      coal_mine(1),
      goldSmith(4),
      {
        img: Pearls,
        name: 'Pearl Farm',
        needed: 6,
      },
      {
        img: Jewellers,
        name: 'Jewellers',
        needed: 2,
      },
    ],
    output: 4,
    level: 'Investors',
  },
  {
    final_product: 'Gramophones',
    steps: [
      wood(1),
      copper_mine(2),
      zinc_mine(2),
      {
        img: MarquetryWorkshop,
        name: 'Marquetry Workshop',
        needed: 4,
      },
      brass(4),
      {
        img: Gramophone,
        name: 'Gramophone Factory',
        needed: 4,
      },
    ],
    output: 4,
    level: 'Investors',
  },
  {
    final_product: 'Steam Carriages',
    steps: [
      iron(1),
      coal_mine(1),
      copper_mine(2),
      zinc_mine(2),
      furnace(2),
      brass(4),
      wood(1),
      caoutchouc(4),
      {
        img: SteamCarriage,
        name: 'Motor Assembly Line',
        needed: 3,
      },
      {
        img: CoachMaker,
        name: 'Coachmakers',
        needed: 8,
      },
      {
        img: SteamCarriage,
        name: 'Cab Assembly Line',
        needed: 2,
      },
    ],
    output: 4,
    level: 'Investors',
  },
];
