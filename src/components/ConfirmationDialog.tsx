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
    <div className={"ConfirmationDialog"}>
      <div className={"ConfirmationDialogCard"}>
        <div className={"ConfirmationDialogHeader"}>
          <div className={"ConfirmationDialogClose"}>
            <span onClick={onClose}>&times;</span>
          </div>

          <h2>{title}</h2>
        </div>

        <div className={"ConfirmationDialogFooter"}>
          <div className={"ConfirmationDialogActions"}>
            <button className={"button"} onClick={onClose}>No</button>
            <button className={"button primary"} onClick={onYes}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  )
}