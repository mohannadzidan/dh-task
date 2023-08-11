import Stack from "../../../components/Stack";
import Card, { CardProps } from "../../../components/Card";
import CharacterPopulation, {
  CharacterPopulationProps,
} from "../../../components/CharacterPopulation";
import FemaleFilledCharacter from "../../../components/FemaleFilledCharacter";
import MaleFilledCharacter from "../../../components/MaleFilledCharacter";
import Typography from "../../../components/Typography";
import t from "../../../locale";

export type Population = {
  character: CharacterPopulationProps["Character"];
  color: CharacterPopulationProps["color"];
  percentage: CharacterPopulationProps["percentage"];
  name: CharacterPopulationProps["name"];
};

export interface PopulationCardProps extends CardProps {
  name: string;
  populations: Population[];
}

export default function PopulationCard({
  name,
  populations,
  ...props
}: PopulationCardProps) {
  return (
    <Card
      flex={1}
      display="flex"
      direction="column"
      alignItems="center"
      {...props}
    >
      <Stack spacing={4}>
        <Typography variant="h4">{name}</Typography>
        <Stack direction="row" spacing={10}>
          {populations.map((p) => (
            <CharacterPopulation
              key={p.name}
              percentage={p.percentage}
              color={p.color}
              name={p.name}
              size={130}
              Character={p.character}
            />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
