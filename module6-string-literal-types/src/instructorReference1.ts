type YesOrNo = "YES" | "NO";

type ValidAnswerJunk = `My answer is ${string}`;
const x: ValidAnswerJunk = "My answer is blahhhhhhhh";
// @ts-expect-error
const y: ValidAnswerJunk = "My answer isX blahhhhhhhh";

type ValidAnswer = `My answer is ${YesOrNo}`;

const answerA: ValidAnswer = "My answer is YES";

// @ts-expect-error
const answerB: ValidAnswer = "My answer is blahhhhhhh";

const paths = {
  users: "/users",
  userContacts: "/users/contacts",
  user: "/users/:id",
  settings: "/admin/settings",
  billing: "/admin/billing",
  account: "/admin/account",
} as const;

type Paths = typeof paths;
type AllPaths = Paths[keyof Paths];

type PluckPathsFor_A<T, Path extends string> = T extends `/${Path}/${string}` ? T : never;

type AdminPaths_A = PluckPathsFor_A<AllPaths, "admin">;

type PluckPathsFor_B<T, Path extends string> = T extends `/${Path}/${infer U}` ? U : never;

type AdminPaths_B = PluckPathsFor_B<AllPaths, "admin">;

function doSomething(path: AdminPaths_B) {}

doSomething("billing");
doSomething("settings");
doSomething("settings");

// @ts-expect-error
doSomething("settings_nope");

export default null;
