import {computed, inject, Injectable, signal} from '@angular/core';
import {UserModel} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {map, Observable, tap} from 'rxjs';
import {UserProps} from '@/features/profil/models/user.type';

@Injectable({providedIn: 'root'})
export class UsersService {
  users = signal<UserModel[]>([]);
  me = computed(() => this.getUserById('mistervinvin'));

  private http = inject(HttpClient)

  loadUsers(): Observable<UserModel[]> {
    return this.http
      .get<UserProps[]>('data/users.json')
      .pipe(
        map(list => list.map(props => new UserModel(props))),
        tap(users => this.users.set(users))
      );
  }

  getUsers() {
    return this.users();
  }

  getOtherUsers(): UserModel[] {
    return this.getUsers().filter(user => user.id !== this.me()?.id);
  }

  getUserById(id: string): UserModel {
    const user = this.users().find(user => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
