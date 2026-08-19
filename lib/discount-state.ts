/**
 * Form state shared by the discount action and the modal.
 *
 * Separate file for the same reason lib/form-state.ts is separate: a
 * "use server" file may only export async functions, so the initial-state
 * constant cannot live beside the action it belongs to.
 */

/**
 * Must stay a SUBSET of EnquiryFieldName in lib/form-state.ts. The modal calls
 * the `validate` function exported from components/EnquiryForm, which is keyed
 * on that union — widen this with a name that union does not have and the
 * modal stops type-checking.
 */
export type DiscountFieldName = "name" | "email" | "phone" | "description";

export type DiscountFormState = {
  ok: boolean;
  /** Field-level errors, keyed by input name. */
  fieldErrors?: Partial<Record<DiscountFieldName, string>>;
  /** Whole-form error. Always says what went wrong AND how to fix it. */
  formError?: string;
};

export const EMPTY_DISCOUNT_STATE: DiscountFormState = { ok: false };
