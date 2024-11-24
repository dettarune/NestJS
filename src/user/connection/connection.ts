import { Injectable } from '@nestjs/common';

export class Connection {
    getName(): string {
        return null
    }
}

@Injectable()
export class MySQL extends Connection {
    getName(): string {
        return 'MySQL'
    }
}

@Injectable()
export class MongoDB extends Connection {
    getName(): string {
        return 'MongoDB'
    }
}
