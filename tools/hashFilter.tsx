
export default function hashFilter(hash: string) {
  switch (hash) {
    case "":
      return "index";
    case "test1":
      return "test1";
    case "test2":
      return "test2";
  }
}
