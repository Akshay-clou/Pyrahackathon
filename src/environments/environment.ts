// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import Swal from 'sweetalert2';
export const environment = {
  production: false
,

swalalert(type, msg) {
  if (type === 'success') {
    return new Promise(resolve => {
      Swal.fire({
        type: 'success',
        title: 'Success',
        text: msg,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      }).then(async (result) => {
        resolve(true);
      });
    });
  } else if (type === 'delete') {
    return new Promise(resolve => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, ' + msg + ' it!'
      }).then(async (result) => {
        if (result.value) {
          Swal.fire({
            title: msg + '!',
            text: 'Your file has been ' + msg + '.',
            type: 'success',
            showConfirmButton: false,
            timer: 1000
          }).then(async (result) => {
            resolve(true);
          })
        }
      })
    });
  }
  else {
    Swal.fire({
      type: type,
      title: 'OOPS!',
      text: msg,
      icon: 'warning',
      showConfirmButton: true,
    });
  }
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
