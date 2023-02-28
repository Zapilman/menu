import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAuthModel extends Base {}
export class AuthModel extends TimeStamps {
  @prop({ unique: true })
  login: string;

  passwordHash: string;
}
