interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
  isSubscribed: boolean; 
}

export default function ActionButtons({
  onEdit,
  onDelete,
  isSubscribed,
}: ActionButtonsProps) {
  return (
    <div className="flex space-x-2">
      {!isSubscribed && <button onClick={onEdit}>Edit</button>}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
