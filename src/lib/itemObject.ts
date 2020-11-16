const charcoal = {
  img: 'icon_coal.png',
  name: 'Charcoal Kiln',
  needed: 2,
};

const furnace = {
  img: 'icon_steel.png',
  name: 'Furnace',
  needed: 2,
};

const grain_farm = {
  img: 'icon_cereals.png',
  name: 'Grain Farm',
  needed: 2,
};

const iron = {
  img: 'icon_iron.png',
  name: 'Iron Mine',
  needed: 1,
};

const wool = {
  img: 'icon_wool.png',
  name: 'sheep farm',
  needed: 1,
};

const pigs = {
  img: 'icon_pigs.png',
  name: 'Pig Farm',
  needed: 1,
};

export const items = [
  {
    final_product: 'timber',
    level: 'farmer',
    output: 4,
    steps: [
      {
        img: 'icon_wood_log.png',
        name: "lumberjack's hut",
        needed: 1,
      },
      {
        img: 'icon_wooden_planks.png',
        name: 'sawmill',
        needed: 1,
      },
    ],
  },
  {
    final_product: 'fish',
    level: 'farmer',
    output: 2,

    steps: [{ img: 'icon_fish.png', name: 'fishery', needed: 1 }],
  },
  {
    final_product: 'schnapps',
    level: 'farmer',
    output: 2,
    steps: [
      {
        img: 'icon_potatoes.png',
        name: 'potato farm',
        needed: 1,
      },
      { img: 'icon_schnapps.png', name: 'schnapps distillery', needed: 1 },
    ],
  },
  {
    final_product: 'work_clothes',
    steps: [
      wool,
      {
        img: 'icon_working_clothes.png',
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
        img: 'icon_clay.png',
        name: 'Clay Pit',
        needed: 1,
      },
      {
        img: 'icon_bricks.png',
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
      {
        img: 'icon_pigs.png',
        name: 'Pig Farm',
        needed: 1,
      },
      {
        img: 'icon_meat_sausage.png',
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
      grain_farm,
      {
        img: 'icon_flour.png',
        name: 'Flour Mill',
        needed: 1,
      },
      {
        img: 'icon_bread.png',
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
      wool,
      {
        img: 'icon_sail.png',
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
      iron,
      charcoal,
      furnace,
      {
        img: 'icon_beams.png',
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
      {
        ...pigs,
        needed: 2,
      },
      {
        img: 'icon_tallow.png',
        name: 'Rendering Works',
        needed: 2,
      },
      {
        img: 'icon_soap.png',
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
      iron,
      charcoal,
      furnace,
      {
        img: 'icon_weapons.png',
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
      grain_farm,
      {
        img: 'icon_malt.png',
        name: 'Malthouse',
        needed: 1,
      },
      {
        img: 'icon_hops.png',
        name: 'Hop Farm',
        needed: 3,
      },
      {
        img: 'icon_beer.png',
        name: 'Brewery',
        needed: 2,
      },
    ],
    output: 2,
    level: 'workers',
  },
];

export const toggle = {
  img: '../images/toggle/icon_toggle.png',
};
