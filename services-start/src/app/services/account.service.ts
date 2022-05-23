import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>()
    constructor(private logginService: LoggingService){

    }
    onAccountAdded(newAccount :{name: string, status: string}){
        this.accounts.push(newAccount)
        this.logginService.logStatusChange(newAccount.status)
    }

    onStatusChanged(updatedInfo: {id: number, newStatus: string}){
        this.accounts[updatedInfo.id].status = updatedInfo.newStatus
        this.logginService.logStatusChange(updatedInfo.newStatus)
    }
}