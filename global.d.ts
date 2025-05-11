// global.d.ts
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.min.css" {
  const classes: { [key: string]: string };
  export default classes;
}

