export interface Member {
  id: string;
  name: string;
  nickname: string;
  profile: Profile;
}

export interface Profile {
  url: string;
}

export interface Members {
  members: Member[];
}
