import Notify from 'simple-notify';
import 'simple-notify/dist/simple-notify.min.css';

export function PushNotify(name) {
  return new Notify({
    status: 'success',
    title: 'Success !',
    text: `contact ${name} added.`,
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 1500,
    gap: 80,
    distance: 20,
    type: 2,
    position: 'right top',
  });
}

export function PushNotifyError(name) {
  return new Notify({
    status: 'error',
    title: 'Error !',
    text: `${name}is already in contacts !`,
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 1500,
    gap: 80,
    distance: 20,
    type: 2,
    position: 'right top',
  });
}
