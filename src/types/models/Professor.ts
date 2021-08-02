import { objectType } from "nexus";

export const Professor = objectType({
  name: "Professor",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.studentId();
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
