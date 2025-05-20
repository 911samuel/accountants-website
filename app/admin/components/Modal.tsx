interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  sidebarOpen?: boolean;
}

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
  sidebarOpen,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed overflow-scroll inset-0 bg-white bg-opacity-50 flex items-center justify-center"
      style={{ marginLeft: sidebarOpen ? "256px" : "80px" }}
    >
      <div className="bg-white p-5 rounded-md md:w-1/3">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="text-white">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}