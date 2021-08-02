import { objectType } from "nexus";

export const Student = objectType({
  name: "Student",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.courses({
      type: "Course",
    });
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
