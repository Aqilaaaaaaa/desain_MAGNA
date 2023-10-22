import { Modal } from "antd";


export default function CustomDialog({
    show,
    handleClose,
    title,
    content
}) {
    return (
        <>
            <Modal footer={false} open={show} onCancel={handleClose}>
                <div className="mfp-fade" id="services_1">
                    <div className="content">
                        <div className="des">
                            <h4 style={{ marginBottom: 20 }}>{title}</h4>
                            <p>
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}