function getMetadata(_: CatalogItem): Record<string, string> {
  return {
    item1: "123",
    item2: "xyz",
  };
}

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

function fillWithMetadata1(item: CatalogItem): CatalogItem {
  item.metadata = getMetadata(item);
  return item;
}

const emptyArtist: Artist = {
  id: "0",
  url: "url",
  name: "Taylor Swift",
  metadata: {},
};

const fullArtist = fillWithMetadata1(emptyArtist);

function fillWithMetadata2<T extends CatalogItem>(item: T): T {
  item.metadata = getMetadata(item);
  return item;
}

const fullArtist2 = fillWithMetadata2(emptyArtist);
