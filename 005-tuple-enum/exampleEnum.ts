enum Colors {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

type TeeShirt = {
  size: number;
  color: Colors;
};

const t1: TeeShirt = {
  size: 40,
  color: Colors.Red,
};

const t2: TeeShirt = {
  size: 42,
  color: Colors.Green,
};

const t3: TeeShirt = {
  size: 44,
  color: Colors.Blue,
};

console.log({ t1, t2, t3 });

/* -------------------------------------------------------------------------- */

enum Status {
  draft,
  private,
  public,
}

type Article = {
  id: number;
  title: string;
  status: Status;
};

const art1: Article = {
  id: 1,
  title: "hello world",
  status: Status.draft,
};

const art2: Article = {
  id: 2,
  title: "hello world 2",
  status: Status.public,
};

const art3: Article = {
  id: 3,
  title: "crash course",
  status: Status.private,
};

console.log({ art1, art2, art3 });
