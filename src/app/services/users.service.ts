import {Injectable} from '@angular/core';
import {UserSnapModel} from '../models/face-snap';

@Injectable({providedIn: 'root'})
export class UsersService {
  private MV: UserSnapModel = new UserSnapModel('MisterVinvin', 'https://cdn.discordapp.com/avatars/356474760655536139/a_ccde2d38c3f6df23b2312da5f258eeb9.webp?size=40')
  private CG: UserSnapModel = new UserSnapModel('Cyrielle', 'https://cdn.discordapp.com/avatars/686941282236497940/a5fd7322157a05c5e45370c51a0a041e.webp?size=40')
  private PC: UserSnapModel = new UserSnapModel('Plot de chantier 🏗️', 'https://cdn.discordapp.com/avatars/397774443860066304/d847769d901fe2a99cf9f466e2750138.webp?size=40')
  private B: UserSnapModel = new UserSnapModel('Bibliothèque', 'https://cdn.discordapp.com/avatars/227455657870229504/e06e26301cdda00d616a40c2e7ab2fb9.webp?size=40')
  private Y: UserSnapModel = new UserSnapModel('Ydno', 'https://cdn.discordapp.com/avatars/740422727642513448/bf59c4ff4ce8de203bbd30bb7ef58c40.webp?size=40')
  private BDL: UserSnapModel = new UserSnapModel('Beau de l\'aire', 'https://cdn.discordapp.com/avatars/360034833876910082/4fd2c90db9d9685c83be30ca47f59cf7.webp?size=40')

  me(): UserSnapModel {
    return this.getUserById(0);
  }

  getUserList(): UserSnapModel[] {
    return [this.MV, this.CG, this.PC, this.B, this.Y, this.BDL];
  }

  getUserById(index: number): UserSnapModel {
    return this.getUserList()[index];
  }

  random(): UserSnapModel {
    return this.getUserList()[Math.floor(Math.random() * this.getUserList().length)];
  }
}
