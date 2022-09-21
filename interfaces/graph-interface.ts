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

export interface Image {
  id: string;
  url: string;
}

export interface Gallery {
  image: Image;
}

export interface Galleries {
  galleries: Gallery[];
}
