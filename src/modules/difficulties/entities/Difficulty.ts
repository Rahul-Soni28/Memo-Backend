import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('difficulty')
export default class Difficulty {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  active: boolean;

  constructor() {
    this.id = uuid();
  }
}