export type VizFileId = string;
export type VizFiles = {
  [fileId: VizFileId]: VizFile;
};
export type VizFile = {
  name: string;
  text: string;
};
export declare const generateVizFileId: () => VizFileId;
