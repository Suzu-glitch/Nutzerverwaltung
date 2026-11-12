import useFormInput from "../../hooks/useFormInput";
import TextInput from "../input/TextInput";
import DateInput from "../input/DateInput";
import SelectInput from "../input/SelectInput";
import SubmitButton from "../button/SubmitButton";
import type { UserFormData } from "../../types/User";

const GENDER_OPTIONS = ["Männlich", "Weiblich", "Divers"];
const MISSING_INFORMATION_MESSAGE = "Bitte Informationen ergänzen";

type UserFormProps = {
  user?: UserFormData;
  onSubmit: (userData: UserFormData) => void;
};

function UserForm({ user, onSubmit }: UserFormProps) {
  const username = useFormInput(user?.username ?? "", true);
  const dateOfBirth = useFormInput(user?.dateOfBirth ?? "", true);
  const gender = useFormInput(user?.gender ?? "", true);
  const email = useFormInput(user?.email ?? "", true);
  const postalAddress = useFormInput(user?.postalAddress ?? "", true);
  const phoneNumber = useFormInput(user?.phoneNumber ?? "", true);
  const website = useFormInput(user?.website ?? "", true);

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
      alert(MISSING_INFORMATION_MESSAGE);
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
        label="Webseite"
        value={website.value}
        error={website.error}
        onChange={website.onChange}
      />
      <SubmitButton onClick={handleSubmitUser} />
    </form>
  );
}

export default UserForm;
