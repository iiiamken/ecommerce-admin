"use client"

import { useStoreModal } from "../../../hooks/use-store-modal"
import Modal from "@/components/ui/modal"

export const StoreModal = () => {
  const storemodal = useStoreModal()
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storemodal.isOpen}
      onClose={storemodal.onClose}
    >
      Future create store modal
    </Modal>
  )
}
