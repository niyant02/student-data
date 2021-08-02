import { queryType } from "nexus";

export const Query = queryType({
  definition(t) {
    t.crud.course();
    t.crud.courses({
      filtering: true,
      ordering: true,
      pagination: true,
    });
    t.crud.professor();
    t.crud.professors({
      filtering: true,
      ordering: true,
      pagination: true,
    });
    t.crud.student();
    t.crud.students({
      filtering: true,
      ordering: true,
      pagination: true,
    });
  },
});
