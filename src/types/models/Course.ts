import { objectType } from "nexus";

export const Course = objectType({
  name: "Course",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.student({
      type: "Student",
    });
    t.field("createdAt", {
      type: "DateTime",
    });
    t.field("updatedAt", {
      type: "DateTime",
    });
  },
});
