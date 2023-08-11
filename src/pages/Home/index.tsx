import { useState } from "react";
import Layout from "../../components/layout/Layout";
import t from "../../locale";
import Stack from "../../components/Stack";
import CircleIcon from "../../components/icons/CircleIcon";
import RepeatIcon from "../../components/icons/RepeatIcon";
import CircleFillIcon from "../../components/icons/CircleFillIcon";
import MaleFilledCharacter from "../../components/MaleFilledCharacter";
import FemaleFilledCharacter from "../../components/FemaleFilledCharacter";
import CountCard from "./components/CountCard";
import PopulationCard from "./components/PopulationCard";
import { useTheme } from "styled-components";
import Divider from "../../components/Divider";
import Select, { SelectOption } from "./components/ButtonGroup";
import DatePicker from "./components/DatePicker";

export default function Home() {
  const theme = useTheme();
  const [value, setValue] = useState("all");
  return (
    <Layout spacing={4} backgroundColor={theme.colors.background.default}>
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        spacing={7}
      >
        <DatePicker />
        <Select value={value} onChange={setValue}>
          <SelectOption value="all" lampColor="secondary">
            {t("all")}
          </SelectOption>
          <SelectOption value="unregistered" lampColor="warning">
            {t("unregistered")}
          </SelectOption>
          <SelectOption value="registered" lampColor="success">
            {t("registered")}
          </SelectOption>
        </Select>
      </Stack>
      <Stack
        direction={{
          xs: "column",
          sm: "column",
          lg: "row",
        }}
        spacing={3}
      >
        <CountCard
          flex={1}
          count={10914}
          name={t("registered_births_count")}
          icon={<CircleIcon size={64} color="success" />}
        />
        <CountCard
          flex={1}
          count={20}
          name={t("registered_deaths_count")}
          icon={<CircleFillIcon size={64} color="secondary" />}
        />
        <CountCard
          flex={1}
          count={400}
          name={t("submitted_edit_requests")}
          icon={<RepeatIcon size={64} color="warning" />}
        />
      </Stack>
      <Stack direction={{ xs: "column", lg: "row" }}>
        <PopulationCard
          name={t("ratio_male_to_female")}
          populations={[
            {
              name: t("females"),
              color: "#e85099",
              character: FemaleFilledCharacter,
              percentage: 0.12,
            },
            {
              name: t("males"),
              color: "#02a0fc",
              character: MaleFilledCharacter,
              percentage: 0.88,
            },
          ]}
        />
        <Divider />
        <PopulationCard
          name={t("ratio_male_to_female")}
          populations={[
            {
              name: t("females"),
              color: "#7d7d94",
              character: FemaleFilledCharacter,
              percentage: 0.88,
            },
            {
              name: t("males"),
              color: "#7d7d94",
              character: MaleFilledCharacter,
              percentage: 0.12,
            },
          ]}
        />
      </Stack>
    </Layout>
  );
}
