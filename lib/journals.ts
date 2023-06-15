import { prisma } from './prisma'

// GET journals (userId)
export async function getJournals(userId: string) {
  'use server'
  const journals = await prisma.journal.findMany({ where: { userId: userId }, orderBy: { id: 'asc' } })
  return journals
}


// POST journal
export async function createJournal(text: string, title: string, userId: string, isPrivate: boolean) {
  'use server'

  try {

    const journal = await prisma.journal.create({ data: { text, title, userId, isPrivate } })
    return { journal }
  } catch (error) {
    console.log(error, 'ERROR IN NEWJOURNAL')
    return { error }
  }
}

// PUT/PATCH journal
export async function updateJournal(id: number, text: string, title: string, isPrivate?: boolean) {
  'use server'

  try {
    const journal = await prisma.journal.update({ where: { id }, data: { text, title, isPrivate } })
    return { journal }
  } catch (error) {
    console.log(error, 'ERROR IN JOURNALUPDATE')
    return { error }
  }
}


export async function deleteJournal(id: number, userId: string) {

  try {

    const journal = await prisma.journal.delete({ where: { id: id } })
    return { journal, 'message': 'Successfully deleted Journal' }
  } catch (error) {
    return { error }
  }
}
