import {Injectable} from '@angular/core';
import {UserModel} from '../models/user';

@Injectable({providedIn: 'root'})
export class UsersService {
  private MV: UserModel = new UserModel('MisterVinvin', 'https://cdn.discordapp.com/avatars/356474760655536139/a_ccde2d38c3f6df23b2312da5f258eeb9.webp?size=40')
  private CG: UserModel = new UserModel('Cyrielle', 'https://cdn.discordapp.com/avatars/686941282236497940/a5fd7322157a05c5e45370c51a0a041e.webp?size=40')
  private PC: UserModel = new UserModel('Plot de chantier 🏗️', 'https://cdn.discordapp.com/avatars/397774443860066304/d847769d901fe2a99cf9f466e2750138.webp?size=40')
  private B: UserModel = new UserModel('Bibliothèque', 'https://cdn.discordapp.com/avatars/227455657870229504/e06e26301cdda00d616a40c2e7ab2fb9.webp?size=40')
  private Y: UserModel = new UserModel('Ydno', 'https://cdn.discordapp.com/avatars/740422727642513448/bf59c4ff4ce8de203bbd30bb7ef58c40.webp?size=40')
  private BDL: UserModel = new UserModel('Beau de l\'aire', 'https://cdn.discordapp.com/avatars/360034833876910082/4fd2c90db9d9685c83be30ca47f59cf7.webp?size=40')

  me(): UserModel {
    return this.getUserById(0);
  }

  getUserList(): UserModel[] {
    return [this.MV, this.CG, this.PC, this.B, this.Y, this.BDL];
  }

  getUserWithoutMe(): UserModel[] {
    return this.getUserList().filter(user => user !== this.me());
  }

  getUserById(index: number): UserModel {
    return this.getUserList()[index];
  }

  random(): UserModel {
    return this.getUserWithoutMe()[Math.floor(Math.random() * this.getUserWithoutMe().length)];
  }

  randomForFeed(): UserModel {
    return this.getUserWithoutMe()[Math.floor(Math.random() * 2)];
  }
}
