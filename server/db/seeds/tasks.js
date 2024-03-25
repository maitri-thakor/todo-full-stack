/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    { id: 1, name: 'Meditation', priority: 1, completed: true },
    { id: 2, name: 'Breakfast', priority: 2, completed: false },
    { id: 3, name: 'Reading', priority: 3, completed: false },
  ])
}
