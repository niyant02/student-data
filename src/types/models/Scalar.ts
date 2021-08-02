import { GraphQLDate, GraphQLDateTime } from "graphql-iso-date";
import { asNexusMethod, scalarType } from "nexus";
import { JSONObjectResolver } from "graphql-scalars";

enum SexType {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export const Sex = scalarType({
  name: "Sex",
  asNexusMethod: "sex",
  parseValue(value: SexType) {
    if (SexType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

enum GraduateType {
  Undergraduate = "Undergraduate",
  Graduate = "Graduate",
}

export const Gradute = scalarType({
  name: "Gradute",
  asNexusMethod: "gradute",
  parseValue(value: GraduateType) {
    if (GraduateType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export const Json = asNexusMethod(JSONObjectResolver, "json");
export const Date = asNexusMethod(GraphQLDate, "date");
export const DateTime = asNexusMethod(GraphQLDateTime, "date");
