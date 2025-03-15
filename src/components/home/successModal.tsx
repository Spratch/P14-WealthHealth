import { Button, Dialog, Modal, ModalOverlay } from "react-aria-components";
import { CheckmarkCircleIcon, AddUserIcon, UsersIcon } from "@sanity/icons";
import { Link } from "react-router";

export function SuccessModal() {
  return (
    <ModalOverlay
      isDismissable
      className={`fixed inset-0 z-50 bg-black/25 flex items-center justify-center p-4 backdrop-blur`}
    >
      <Modal
        className={`w-full max-w-lg bg-white dark:bg-neutral-800 rounded-3xl p-4 overflow-hidden border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100`}
      >
        <Dialog
          role="dialog"
          className="outline-hidden flex flex-col gap-7 items-end"
        >
          <div className="w-full flex flex-col gap-1.5">
            <h2
              slot="title"
              className="text-lg font-semibold flex items-center gap-2"
            >
              <CheckmarkCircleIcon className="size-6.25 text-lime-600 dark:text-lime-400" />
              Employee created
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-balance">
              The employee has been successfully added to the database.
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2.5 justify-end w-full flex-wrap">
            <Button
              slot="close"
              className="border border-neutral-200 dark:border-neutral-600 rounded-lg px-4 py-2 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2 focus cursor-pointer"
            >
              <AddUserIcon className="size-6" />
              Add another employee
            </Button>
            <Link
              to="/employees"
              className="border border-lime-600 dark:border-lime-400 rounded-lg px-4 py-2 text-lime-600 dark:text-lime-400 hover:bg-lime-50 dark:hover:bg-lime-900 transition-colors flex items-center justify-center gap-2 focus"
            >
              <UsersIcon className="size-6" />
              View employees
            </Link>
          </div>
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
