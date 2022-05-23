import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    setUserActive = new EventEmitter<number>()
    setUserInactive = new EventEmitter<number>()
    constructor(private counterService: CounterService) {

    }
    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementInactiveCount()
    }

    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementActiveCount()
    }
}