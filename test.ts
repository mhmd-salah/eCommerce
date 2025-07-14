interface Bike {
  ride(): void;
}

class MountainBike implements Bike {
  ride(): void {
    console.log("Riding a mountain Bike");
  }
}

class RoadBike implements Bike {
  ride(): void {
    console.log("Riding a Road Bike");
  }
}

class BikeFactory {
  static createBike(type: string): Bike{
    if (type === "mountain") {
      return new MountainBike();
    } else if (type === "road") {
      return new RoadBike();
    }else{
      throw new Error("unknown bike type")
    }
  }
}

const roadBike = BikeFactory.createBike("road")
roadBike.ride()