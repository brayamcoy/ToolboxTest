import { toast } from 'react-toastify'

toast.configure()

const notificationToast = (type, message) =>
  toast[type](message, {
    position: 'top-right',
    autoClose: true,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  })

export default notificationToast
