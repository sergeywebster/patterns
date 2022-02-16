class Cart {
    constructor(id, total) {

        if (Cart.exists) {
            return Cart.instance;
        }

        Cart.instance = this;
        Cart.exists = true;
        this.id = id;
        this.total = total;
    }

    getId() {
        return this.id;
    }

    getTotal() {
        return this.total;
    }
}

const cart = new Cart('12', '12000')

console.log(cart.getTotal())