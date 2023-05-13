export interface CatalogItem {
  id: string;
  url: string;
  metadata: Record<string, string>;
}

export interface Artist extends CatalogItem {
  name: string;

  TYPE: "ARTIST";
}

export interface Album extends CatalogItem {
  name: string;
  trackCount: number;

  TYPE: "ALBUM";
}

export interface Song extends CatalogItem {
  name: string;
  duration: number;

  TYPE: "SONG";
}

// write a printAlbumInfo method that takes an Artist | Album | Song object, and prints the info of the object (feel free to modify the types)

function printAlbumInfo(item: Artist | Album | Song) {
  if (item.TYPE === "ARTIST") {
    console.log("Artist", item.id, item.name);
  } else if (item.TYPE === "ALBUM") {
    console.log("Artist", item.id, item.name, item.trackCount);
  } else {
    console.log("Artist", item.id, item.name, item.duration);
  }
}
