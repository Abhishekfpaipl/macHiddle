import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2'
const sweetAlert = {
    showSweetAlert(title = 'Yay!', text = 'Order Has been Accepted.') {
        Swal.fire({
            title,
            text,
            icon: 'success',
            timer: 2000, // it will auto close the sweetalert
            showConfirmButton: false, // Hide the "OK" button when timer is set
            confirmButtonText: 'OK',
            confirmButtonColor: '#25C297',
            customClass: {
                // popup: 'custom-swal-container',
                // icon: 'custom-swal-icon-color'
            }
        });
    },
    showSweetError(title = 'Oops!', text = 'Something went wrong!') {
        Swal.fire({
            title,
            text,
            icon: 'error',
            // timer: 2000, // it will auto close the sweetalert
            showConfirmButton: true, // Hide the "OK" button when timer is set
            confirmButtonText: 'OK'
        });
    },
    showEmailError(title = '', text = '') {
        Swal.fire({
            icon: "warning",
            title,
            text,
            showConfirmButton: false,
            footer: "<a href='/email-verification-page'>Go to Email Verification Page</a>"
        });
    }

}
export default sweetAlert