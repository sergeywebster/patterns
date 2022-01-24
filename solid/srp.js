// Single responsibility principle
class Tickets {
    constructor(origin, destination, depart_date, return_date, price) {
        this.origin = origin;
        this.destination = destination;
        this.depart_date = depart_date;
        this.return_date = return_date;
        this.price = price;
    }
}


class ApiData {
    constructor(ticket) {
        this.ticket = ticket;
    }

    json() {
        return JSON.stringify({
            origin: this.ticket.origin,
            destination: this.ticket.destination,
            depart_date : this.ticket.depart_date,
            return_date : this.ticket.return_date,
            price : this.ticket.price
        }, null, 2)
    }

    xml() {
        return `
        <ticket>
            <origin>${this.ticket.origin}</origin>
            <destination>${this.ticket.destination}</destination>
            <depart_date>${this.ticket.depart_date}</depart_date>
            <return_date>${this.ticket.return_date}</return_date>
            <price>${this.ticket.price}</price>
        </ticket>
        `
    }
}

const api = new ApiData 
    (new Tickets('IEV', 'CGN', '05/12/2023', '10/12/2023', 300)
)

console.log(api.json())
console.log(api.xml())