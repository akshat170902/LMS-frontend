import { Course } from "./course.model";

interface CourseResponse {
    course: Course;
    DoubtList: any[]; // Adjust this type based on what DoubtList contains, if necessary
  }