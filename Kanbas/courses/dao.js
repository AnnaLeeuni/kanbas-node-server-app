import courseModel from "./model.js";

export const findAllCourses = () => courseModel.find();
export const findCourseById = (courseId) => courseModel.findOne({id:courseId});
export const updateCourse = (courseId, course) =>  courseModel.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => courseModel.deleteOne({ _id: courseId });
export const createCourse = (course) => {
    const id = course._id
    delete course._id; 
    return courseModel.create({...course, id});
};