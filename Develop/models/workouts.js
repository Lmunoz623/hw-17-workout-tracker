const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date,
      default: new Date()
  },
  exercises: [
      {
        type: {
            type: String,
            trim: true,
            required: "Exercise type cannot be left blank."
        },
        name: {
            
        },
        duration: {

        },
        weight: {

        },
        reps: {

        },
        sets: {

        }  
      }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);
