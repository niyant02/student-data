import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "pretty",
  log: [
    { emit: "event", level: "query" },
    { emit: "stdout", level: "error" },
    { emit: "stdout", level: "info" },
    { emit: "stdout", level: "warn" },
  ],
});

export interface Context {
  request: any;
  prisma: PrismaClient;
}

export function createContext(request: any): Context {
  return {
    request,
    prisma,
  };
}
