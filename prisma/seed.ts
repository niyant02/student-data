import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const course = await prisma.course.create({
    data: {
      name: "DataBase management",
    },
  });

  const professor = await prisma.professor.create({
    data: {
      name: "Zhengxin Chen",
    },
  });

  const student = await prisma.student.createMany({
    data: [
      {
        firstName: "Erik",
        lastName: "Anderson",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Tanner",
        lastName: "Beauliei",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Brendan",
        lastName: "Buglewicz",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Resma Babu",
        lastName: "Chethan",
        sex: "Female",
        gradute: "Graduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Carter",
        lastName: "Collins",
        sex: "Male",
        gradute: "Graduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Nick",
        lastName: "Cox",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Adam",
        lastName: "DeTavernier",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Zachary",
        lastName: "Goehring",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Alex",
        lastName: "Hodges",
        sex: "Male",
        gradute: "Graduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Roschen",
        lastName: "Jacob",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Adele",
        lastName: "Kanley",
        sex: "Female",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Zach",
        lastName: "Lawslo",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Jiahao",
        lastName: "Ma",
        sex: "Male",
        gradute: "Graduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Ernesto",
        lastName: "Macias",
        sex: "Male",
        gradute: "Graduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Tariro",
        lastName: "Nangati",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Patrik Oliveria",
        lastName: "Dos Santos",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Kyle",
        lastName: "Phipps",
        sex: "Male",
        gradute: "Graduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Selvi",
        lastName: "Rhode",
        sex: "Female",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Rayanna",
        lastName: "Shirley",
        sex: "Female",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Khan",
        lastName: "Wan",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
      {
        firstName: "Yusuke",
        lastName: "Yoshioka",
        sex: "Male",
        gradute: "Undergraduate",
        courseId: 1,
        professorId: 1,
      },
    ],
    skipDuplicates: true,
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
