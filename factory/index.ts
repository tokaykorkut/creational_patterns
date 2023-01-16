import { NYPD, TicketTransportTypes } from "./pattern";

const officer = new NYPD();

console.log('Officer caught some wrong parked cars!');

officer.sendTicketToCitizen(TicketTransportTypes.EMAIL);
officer.sendTicketToCitizen(TicketTransportTypes.EMAIL);
console.log();
console.log('-----------------------------------------');
console.log();
officer.sendTicketToCitizen(TicketTransportTypes.MAIL);
officer.sendTicketToCitizen(TicketTransportTypes.MAIL);
