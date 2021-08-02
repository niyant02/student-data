import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Course: Prisma.Course
  Professor: Prisma.Professor
  Student: Prisma.Student
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    courses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'createdAt' | 'updatedAt' | 'student' | 'studentId'
      ordering: 'id' | 'name' | 'createdAt' | 'updatedAt' | 'student' | 'studentId'
    }
    professors: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'createdAt' | 'updatedAt' | 'student' | 'studentId'
      ordering: 'id' | 'name' | 'email' | 'createdAt' | 'updatedAt' | 'student' | 'studentId'
    }
    students: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'courses' | 'professor' | 'sex' | 'gradute' | 'createdAt' | 'updatedAt'
      ordering: 'id' | 'name' | 'email' | 'sex' | 'gradute' | 'createdAt' | 'updatedAt'
    }
  },
  Course: {

  }
  Professor: {

  }
  Student: {
    courses: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'createdAt' | 'updatedAt' | 'student' | 'studentId'
      ordering: 'id' | 'name' | 'createdAt' | 'updatedAt' | 'student' | 'studentId'
    }
    professor: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'email' | 'createdAt' | 'updatedAt' | 'student' | 'studentId'
      ordering: 'id' | 'name' | 'email' | 'createdAt' | 'updatedAt' | 'student' | 'studentId'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    course: 'Course'
    courses: 'Course'
    professor: 'Professor'
    professors: 'Professor'
    student: 'Student'
    students: 'Student'
  },
  Mutation: {
    createOneCourse: 'Course'
    updateOneCourse: 'Course'
    updateManyCourse: 'AffectedRowsOutput'
    deleteOneCourse: 'Course'
    deleteManyCourse: 'AffectedRowsOutput'
    upsertOneCourse: 'Course'
    createOneProfessor: 'Professor'
    updateOneProfessor: 'Professor'
    updateManyProfessor: 'AffectedRowsOutput'
    deleteOneProfessor: 'Professor'
    deleteManyProfessor: 'AffectedRowsOutput'
    upsertOneProfessor: 'Professor'
    createOneStudent: 'Student'
    updateOneStudent: 'Student'
    updateManyStudent: 'AffectedRowsOutput'
    deleteOneStudent: 'Student'
    deleteManyStudent: 'AffectedRowsOutput'
    upsertOneStudent: 'Student'
  },
  Course: {
    id: 'Int'
    name: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    student: 'Student'
    studentId: 'Int'
  }
  Professor: {
    id: 'Int'
    name: 'String'
    email: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    student: 'Student'
    studentId: 'Int'
  }
  Student: {
    id: 'Int'
    name: 'String'
    email: 'String'
    courses: 'Course'
    professor: 'Professor'
    sex: 'Sex'
    gradute: 'Graduate'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Course: Typegen.NexusPrismaFields<'Course'>
  Professor: Typegen.NexusPrismaFields<'Professor'>
  Student: Typegen.NexusPrismaFields<'Student'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  