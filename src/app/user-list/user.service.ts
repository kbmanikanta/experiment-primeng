import { User } from './../store/users';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';


@Injectable()
export class UserService {

	getUsers(): Observable<User[]> {
		const users: User[] = [
			{ id: 1, username: 'user1', email: 'mail@test.com' },
			{ id: 2, username: 'user2', email: 'mail2@test.com' },
			{ id: 3, username: 'user3', email: 'mail3@test.com' },
			{ id: 4, username: 'user4', email: 'mail4@test.com' },
			{ id: 5, username: 'user5', email: 'mail5@test.com' }
		];
		return Observable.of(users);
	}
}
