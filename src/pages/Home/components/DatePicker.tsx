import Card from "../../../components/Card";
import { styled } from "styled-components";
import DatePickerIcon from "../../../components/icons/DatePickerIcon";
import t from "../../../locale";

export const StyledDatePicker = styled(Card)`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  padding: 16px 12px;
  align-items: center;
  width: 300px;
  gap: 12px;
  & span:last-of-type {
    flex: 1;
  }
  & span:first-of-type {
    flex: 1;
  }
`;

export default function DatePicker() {
  return (
    <StyledDatePicker>
      <span>{t("period")}:</span>
      <span>7/7/2022</span>
      <span> → </span>
      <span>1/7/2022</span>
      <DatePickerIcon size={16} />
    </StyledDatePicker>
  );
}
