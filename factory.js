// Define classes of subscription

class DaySubscription {
    constructor() {
        this.name = 'Day'
        this.price = 0.5;
    }
}

class MonthSubscription {
    constructor() {
        this.name = 'Month';
        this.price = 15;
    }
}

class YearSubscription {
    constructor() {
        this.name = 'Year';
        this.price = 150;
    }
}

// Create a factory

class SubscriptionFactory {

    // assign classes to static object
    static list = {
        day: DaySubscription,
        month: MonthSubscription,
        year: YearSubscription
    }

    // create a  method 'create' and define a classes by type
    create(type = 'month') {
        const SubscriptionList = SubscriptionFactory.list[type] || SubscriptionFactory.list.month;
        const subscription = new SubscriptionList();
        subscription.type = type;

        return subscription;
    }
}

const factory = new SubscriptionFactory();
const currentSubscription = factory.create('day')

// or
// const currentSubscription = factory.create('month')
// const currentSubscription = factory.create('year')

console.log(currentSubscription)




