export type ItemObject = {
  timber: {
    "lumberjack's hut": {
      img: string;
      needed: number;
    };
    sawmill: {
      img: string;
      needed: number;
      output: number;
    };
    level: string;
  };
  fish: {
    fishery: {
      needed: number;
      img: string;
    };
    level: string;
  };
  schnapps: {
    'potato farm': {
      needed: number;
      img: string;
    };
    'schnapps distillery': {
      needed: number;
      img: string;
      output: number;
    };
    level: 'farmer';
  };
  'work clothes': {
    'sheep farm': {
      img: string;
      needed: number;
    };
    'framework knitters': {
      img: string;
      needed: number;
      output: number;
    };
    level: string;
  };
};
