import React from "react";

import { useSelector, useDispatch } from "react-redux";

function addCourseAction(title) {
  return { type: "ADD_COURSE", title };
}

export default function CourseList() {
  const qyt = 2;

  const courses = useSelector(state => state.data.slice(0, qyt), [qyt]);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction("GraphQL"));
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar Curso
      </button>
    </>
  );
}
