import useFormInput from "../../hooks/useFormInput";
import TextInput from "../input/TextInput";
import DateInput from "../input/DateInput";
import SelectInput from "../input/SelectInput";
import SubmitButton from "../button/SubmitButton";

const GENDER_OPTIONS = ["Männlich", "Weiblich", "Divers"];

function UserForm() {
  const username = useFormInput("");
  const dateOfBirth = useFormInput("");
  const gender = useFormInput("");
  const email = useFormInput("");
  const postalAddress = useFormInput("");
  const phoneNumber = useFormInput("");
  const website = useFormInput("");

  return (
    <form className="user-form">
      <TextInput id="username" label="Username" {...username} />
      <DateInput id="dateOfBirth" label="Geburtsdatum" {...dateOfBirth} />
      <SelectInput
        id="gender"
        label="Geschlecht"
        options={GENDER_OPTIONS}
        {...gender}
      />
      <TextInput id="email" label="Email Adresse" {...email} />
      <TextInput id="postalAddress" label="Post Adresse" {...postalAddress} />
      <TextInput id="phoneNumber" label="Telefonnummer" {...phoneNumber} />
      <TextInput id="website" label="Webseite" {...website} />
      <SubmitButton />
    </form>
  );
}

export default UserForm;
