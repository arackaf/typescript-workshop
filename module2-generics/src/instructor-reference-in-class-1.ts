export interface CatalogItem {
  id: string;
  url: string;
  metadata: Record<string, string>;
}

export interface Artist extends CatalogItem {
  name: string;
}

export interface Album extends CatalogItem {
  name: string;
  trackCount: number;
}

export interface Song extends CatalogItem {
  name: string;
  duration: number;
}

let someArtist: Artist = {
  id: "",
  url: "",
  metadata: {},
  name: "",
};
let someObject = {
  value: 12,
};

function getSimilarItems1(item: CatalogItem): CatalogItem[] {
  return [item, item, item];
}

const temp1 = getSimilarItems1(someArtist);

function getSimilarItems2<T>(item: T): T[] {
  return [item, item, item];
}
const temp2 = getSimilarItems2(someArtist);
const temp3 = getSimilarItems2(someObject);

// type this function - it takes in an artbitrary item that's a CatalogItem, and it returns an array of (in theory)
// similar items of the same type (though for now we're just hard coding the same item).
function getSimilarItems<T extends CatalogItem>(item: T): Promise<T[]> {
  return Promise.resolve([item, item, item]);
}

const x = getSimilarItems({ id: "", url: "", metadata: {}, name: "" } as Artist);

const invalid = getSimilarItems(someObject);

// x should be Promise<Artist[]>
