'use client'

import { useState } from "react"
import { Journal } from "@prisma/client"


export default function JournalEditor({ id, title, text, isPrivate, userId }: Journal) {

  const [entry, setEntry] = useState(text)
  const [header, setHeader] = useState(title)
  const [privacy, setPrivacy] = useState(isPrivate)
  const [isSaving, setIsSaving] = useState(false)
  const [isChanged, setIsChanged] = useState(false)

  return (
    <main>
      Journal Editor coming soon!
    </main>
  )
}
