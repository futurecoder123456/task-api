import prisma from '../config/db.js';

export async function findAll(completedFilter) {
  if (completedFilter !== undefined) {
    return prisma.task.findMany({
      where: {
        completed: completedFilter,
      },
    });
  }
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
