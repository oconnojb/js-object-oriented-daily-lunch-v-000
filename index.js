// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

//MEAL
let mealId = 0;

class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }

  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.mealId === this.id;
      }.bind(this)
    )
  }

  customers() {
    let deliveries = this.deliveries();
    //console.log(deliveries)


  }

  byPrice() {}
}

//DELIVERY
let deliveryId = 0;

class Delivery {
  constructor(mid, nid, cid) {
    this.id = ++deliveryId;
    this.mealId = mid;
    this.neighborhoodId = nid;
    this.customerId = cid;
    store.deliveries.push(this);
  }

  meal() {
    return store.meals.find(
      function(meal) {
        return meal.id === this.mealId;
      }.bind(this)
    )
  }

  customer() {
    return store.customers.find(
      function(customer) {
        return customer.id === this.customerId;
      }.bind(this)
    )
  }

  neighborhood() {
    return store.neighborhoods.find(
      function(neighborhood) {
        return neighborhood.id === this.neighborhoodId;
      }.bind(this)
    )
  }
}

//CUSTOMER
let customerId = 0;

class Customer {
  constructor(name, nid) {
    this.id = ++customerId;
    this.name = name;
    this.neighborhoodId = nid;
    store.customers.push(this);
  }

  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.customerId === this.id;
      }.bind(this)
    )
  }

  meals() {
    let deliveries = this.deliveries();
    //console.log(deliveries);

    let newStore = { mealsIds: [] };
    deliveries.forEach(
      function(element) {
        newStore.mealIds.push(element.mealId);
      }
    );

    console.log(newStore)
  }

  totalSpent() {}
}

//NEIGHBORHOOD
let neighborhoodId = 0;

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId;
    this.name = name;
    store.neighborhoods.push(this);
  }

  deliveries() {
    return store.deliveries.filter(
      function(delivery) {
        return delivery.neighborhoodId === this.id;
      }.bind(this)
    );
  }

  customers() {
    return store.customers.filter(
      function(customer) {
        return customer.neighborhoodId === this.id;
      }.bind(this)
    );
  }

  meals() {}

}
