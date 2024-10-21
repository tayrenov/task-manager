// actions.ts
import { TOGGLE_MODAL, ModalActionTypes } from '../dataTypes';

export const toggleModal = (isOpen: boolean): ModalActionTypes => ({
  type: TOGGLE_MODAL,
  payload: isOpen,
});