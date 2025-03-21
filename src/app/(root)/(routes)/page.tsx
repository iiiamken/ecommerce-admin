"use client"
import { useStoreModal } from "@/hooks/use-store-modal"
import { useEffect } from "react"

const SetupPage = () => {
  const { onOpen, isOpen } = useStoreModal()

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [onOpen, isOpen])

  return null
}
export default SetupPage
