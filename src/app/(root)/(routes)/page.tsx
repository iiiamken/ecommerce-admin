"use client"
import Modal from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"
import { useEffect } from "react"

const SetupPage = () => {
  const { onOpen, isOpen } = useStoreModal()

  useEffect(() => {
    if (!isOpen) {
      onOpen()
    }
  }, [onOpen, isOpen])

  return (
    <div className="p-4">
      <Modal title="test" description="test desc" onClose={() => {}} isOpen>
        Root Page
      </Modal>
    </div>
  )
}
export default SetupPage
