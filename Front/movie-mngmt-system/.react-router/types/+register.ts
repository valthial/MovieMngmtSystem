import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/movie/:id": {
    "id": string;
  };
  "/movie/add": {};
};