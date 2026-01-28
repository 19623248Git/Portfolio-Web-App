export type platforms = 'linkedin' | 'github' | 'email' | 'twitter' | 'patreon' | 'discord';

export interface Social {
  url: string;
  icon: platforms;
}