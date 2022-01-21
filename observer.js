// Create subscription class

class NewsFeed {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(subscriber => subscriber !== observer)
    }

    broadcast(data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}

const newsfeed = new NewsFeed()

// Create subscribers

newsfeed.subscribe(data => {
    console.log('subscribe user 1', data)
})

newsfeed.subscribe(data => {
    console.log('subscribed user 2', data)
})

// Subscribe subscibers to feed
newsfeed.broadcast({someData: 'Cologne news today'})
newsfeed.broadcast({someData: 'Lets read a new newspaper'})


