export type SkillType = 
  | 'frontend' 
  | 'backend' 
  | 'language' 
  | 'framework' 
  | 'web' 
  | 'robotics' 
  | 'tool' 
  | 'devops' 
  | 'database' 
  | 'cloud' 
  | 'system' 
  | 'runtime' 

export interface Skill {
        skill: string;
        src: string;
        type: SkillType[];
}