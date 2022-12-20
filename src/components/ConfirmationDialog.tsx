export default function ConfirmationDialog ({
  title,
  onClose,
  onYes
} : {
  title: string,
  onClose: () => void,
  onYes: () => void
}) {
  return (
    <div>
      <span onClick={onClose}>&times;</span>
      <h2>{title}</h2>
      <button onClick={onClose}>No</button>
      <button onClick={onYes}>Yes</button>
    </div>
  )
}