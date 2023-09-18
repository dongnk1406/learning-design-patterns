// Ref: https://www.youtube.com/watch?v=UQqY3_6Epbg&list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9&index=3

const logger = (message) => {
  console.log(message);
};

class CaloriesTracker {
  constructor(_maxCalories) {
    this.maxCalories = _maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(caloriesCount) {
    this.currentCalories += caloriesCount;
    if (this.currentCalories > this.maxCalories) {
      logger("Max calories exceeded " + this.currentCalories);
    }
  }
}

const calorieTracker = new CaloriesTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
