import { EventEmitter } from "@angular/core"

export class CounterService{
    activeUserCount = 0
    inactiveUserCount = 0
    activeUsers = new EventEmitter<number>()
    inactiveUsers = new EventEmitter<number>()
    incrementActiveCount(){
        this.activeUserCount++
        this.activeUsers.emit(this.activeUserCount)
    }
    incrementInactiveCount(){
        this.inactiveUserCount++
        this.inactiveUsers.emit(this.inactiveUserCount)
    }
}