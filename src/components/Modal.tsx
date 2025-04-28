// components/Modal.tsx
import React from 'react';
import { CgClose } from 'react-icons/cg';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-primary/80 z-50 transition-opacity duration-300">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-11/12 md:max-w-[500px] relative flex flex-col gap-6 border border-gray-tertiary">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
        >
          <CgClose className="w-5 h-5" />
        </button>

        <h2 className="text-lg md:text-[22px] font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}
