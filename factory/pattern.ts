import {v4 as uuid} from 'uuid';
interface IMail {
    ticketId: string;
    sendMail(): void;
}

export enum TicketTransportTypes  {
    EMAIL = 'EMAIL',
    MAIL = 'MAIL'
}

type TicketTransportTypesKeys = keyof typeof TicketTransportTypes;

class ByEmail implements IMail {
    ticketId = uuid();
    sendMail(): void {
        console.log(`We are sending the ticket (${this.ticketId}) by Email.`);
    }
}

class ByPostOffice implements IMail {
    ticketId = uuid();
    sendMail(): void {
        console.log(`We are sending the ticket (${this.ticketId}) by Mail.`);
    }
}

export class NYPD {
    sendTicketToCitizen(mailType: TicketTransportTypesKeys): void {
        if (mailType === TicketTransportTypes.EMAIL) {
            new ByEmail().sendMail();
        }
        if (mailType === TicketTransportTypes.MAIL) {
            new ByPostOffice().sendMail();
        }
    }
}