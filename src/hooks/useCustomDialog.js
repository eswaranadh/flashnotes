import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function useCustomDialog() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const renderContent = (props) => {
        const { dialogContent, title, buttonTitle, hideButton, maxWidth = "md", hideDefaultClose = false, disableEscapeKeyDown = false, btnSize = "small", dialogActions, disableBackdropClick = false } = props;
        return (
            <div>
                <Button hidden={hideButton} onClick={handleClickOpen}>
                    <span>
                        {buttonTitle}
                    </span>
                </Button>
                <Modal centered show={open} onHide={handleClose} dialogClassName="my-dialog">
                    <Modal.Header closeButton>
                        <Modal.Title>{title ?? ""}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {dialogContent}
                    </Modal.Body>
                    {
                        dialogActions ?
                            <Modal.Footer>
                                {dialogActions}
                            </Modal.Footer>
                            :
                            null
                    }

                </Modal>

            </div>
        );
    };

    return {
        isDialogOpen: open,
        renderContent,
        closeDialog: handleClose,
        openDialog: handleClickOpen
    };

}

export default useCustomDialog