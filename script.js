// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) 
{
  //function getLearnerData(courseInfo, assignmentGroup, submissions) {
  // Validate course match
  if (AssignmentGroup.course_id !== CourseInfo.id)
 {
    throw new Error("AssignmentGroup does not belong to the specified course.");
  }



  // Filter assignments that are due and validate points_possible
  const now = new Date();
const validAssignments = [];


for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
  const assignment = AssignmentGroup.assignments[i];
  const dueDate = new Date(assignment.due_at);

  // Compare full date objects directly
  if (dueDate.getTime() <= now.getTime()) {
    if (typeof assignment.points_possible === "number" && assignment.points_possible > 0) {
      validAssignments.push(assignment);
    }
  }
}

  
  }

  return result;


  // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);