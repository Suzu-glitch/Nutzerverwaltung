import useFormInput from "../../hooks/useFormInput";
import useToast from "../../hooks/useToast";
import {
  validateDigits,
  validateEmail,
  validateNotInFuture,
  validatePostalCode,
  validateRequired,
} from "../../hooks/validators";
import TextInput from "../input/TextInput";
import DateInput from "../input/DateInput";
import SelectInput from "../input/SelectInput";
import SubmitButton from "../button/SubmitButton";
import CancelButton from "../button/CancelButton";
import type { UserFormData } from "../../types/User";

const GENDER_OPTIONS = ["Männlich", "Weiblich", "Divers"];
const INVALID_INPUT_MESSAGE = "Bitte Eingaben prüfen";

type UserFormProps = {
  user?: UserFormData;
  onSubmit: (userData: UserFormData) => void;
  onCancel?: () => void;
};

function UserForm({ user, onSubmit, onCancel }: UserFormProps) {
  const { showToast } = useToast();
  const username = useFormInput(user?.username ?? "", [validateRequired]);
  const dateOfBirth = useFormInput(user?.dateOfBirth ?? "", [
    validateRequired,
    validateNotInFuture,
  ]);
  const gender = useFormInput(user?.gender ?? "", [validateRequired]);
  const email = useFormInput(user?.email ?? "", [
    validateRequired,
    validateEmail,
  ]);
  const postalAddress = useFormInput(user?.postalAddress ?? "", [
    validateRequired,
    validatePostalCode,
  ]);
  const phoneNumber = useFormInput(user?.phoneNumber ?? "", [
    validateRequired,
    validateDigits,
  ]);
  const website = useFormInput(user?.website ?? "");

  function handleSubmitUser() {
    const validationResults = [
      username.validate(),
      dateOfBirth.validate(),
      gender.validate(),
      email.validate(),
      postalAddress.validate(),
      phoneNumber.validate(),
      website.validate(),
    ];
    const isFormValid = validationResults.every((isValid) => isValid);

    if (!isFormValid) {
      showToast(INVALID_INPUT_MESSAGE, "error");
      return;
    }

    onSubmit({
      username: username.value,
      dateOfBirth: dateOfBirth.value,
      gender: gender.value,
      email: email.value,
      postalAddress: postalAddress.value,
      phoneNumber: phoneNumber.value,
      website: website.value,
    });
  }

  return (
    <form className="user-form">
      <TextInput
        id="username"
        label="Username"
        value={username.value}
        error={username.error}
        onChange={username.onChange}
      />
      <DateInput
        id="dateOfBirth"
        label="Geburtsdatum"
        value={dateOfBirth.value}
        error={dateOfBirth.error}
        onChange={dateOfBirth.onChange}
      />
      <SelectInput
        id="gender"
        label="Geschlecht"
        value={gender.value}
        options={GENDER_OPTIONS}
        error={gender.error}
        onChange={gender.onChange}
      />
      <TextInput
        id="email"
        label="Email Adresse"
        value={email.value}
        error={email.error}
        onChange={email.onChange}
      />
      <TextInput
        id="postalAddress"
        label="Post Adresse"
        value={postalAddress.value}
        error={postalAddress.error}
        onChange={postalAddress.onChange}
      />
      <TextInput
        id="phoneNumber"
        label="Telefonnummer"
        value={phoneNumber.value}
        error={phoneNumber.error}
        onChange={phoneNumber.onChange}
      />
      <TextInput
        id="website"
        label="Webseite (optional)"
        value={website.value}
        error={website.error}
        onChange={website.onChange}
      />
      <div className="user-form__buttons">
        <SubmitButton onClick={handleSubmitUser} />
        {onCancel && <CancelButton onClick={onCancel} />}
      </div>
    </form>
  );
}

export default UserForm;
