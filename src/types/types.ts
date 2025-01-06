export type TTaskInitType = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "High" | "Medium" | "Low";
  assignTo: string | null;
};

export type TUserInfo = {
  id: string;
  userName: string;
};

export type TUser = {
  users: TUserInfo[];
};

export type TUserDraft = {
  userName: string;
};