import { objectType } from "nexus";

export const Student = objectType({
  name: "Student",
  definition(t) {
    t.model.id();
    t.model.firstName();
    t.model.lastName();
    t.model.email();
    t.model.courseId();
    t.model.courses({
      type: "Course",
    });
    t.model.professorId();
    t.model.professor({
      type: "Professor",
    });
    t.model.sex();
    t.model.gradute();
    t.field("createdAt", {
      type: "DateTime",
    });
    t.field("updatedAt", {
      type: "DateTime",
    });
  },
});
